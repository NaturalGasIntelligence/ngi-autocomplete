import json

from django import forms
from django.apps import apps
from django.db.models import Case, When

from wagtail.admin.staticfiles import versioned_static
from wagtail.utils.widgets import WidgetWithScript

from .views import render_page


class Autocomplete(WidgetWithScript):
    template_name = 'wagtailautocomplete/autocomplete.html'

    def __init__(self, target_model, can_create=False, is_single=True, attrs=None, filters="", sorted_data=None):
        super().__init__(attrs)
        self.target_model = target_model
        self.can_create = can_create
        self.is_single = is_single
        self.filters = ""
        self.sorted_data = sorted_data
        self.filters = filters

    def get_context(self, name, value, attrs):
        context = super().get_context(name, value, attrs)
        context['widget']['target_model'] = self.target_model._meta.label
        context['widget']['can_create'] = self.can_create
        context['widget']['is_single'] = self.is_single
        context['widget']['filters'] = self.filters
        return context

    def format_value(self, value):
        if not value:
            return 'null'
        if type(value) == list:
            pages = self.target_model.objects.filter(pk__in=value)
            if self.sorted_data:
                preserved = Case(*[When(pk=pk, then=index) for pk, index in self.sorted_data.items()])
                pages = pages.order_by(preserved)
            values = json.dumps([
                render_page(page) for page in pages
            ])
            return values
        else:
            return json.dumps(render_page(self.target_model.objects.get(pk=value)))

    def value_from_datadict(self, data, files, name):
        original_value = super().value_from_datadict(data, files, name)
        if not original_value:
            return None
        else:
            original_value = json.loads(original_value)
        value = original_value

        if isinstance(value, list):
            return_value = [obj['pk'] for obj in value if 'pk' in obj]
            return [obj['pk'] for obj in value if 'pk' in obj]
        if isinstance(value, dict):
            if "pk" in value:
                return value.get('pk', None)
        return None

    def render_js_init(self, id_, name, value):
        return "initAutoCompleteWidget({id});".format(
            id=json.dumps(id_),
        )

    @property
    def media(self):
        return forms.Media(
            css={
                'all': [versioned_static('wagtailautocomplete/dist.css')],
            },
            js=[versioned_static('wagtailautocomplete/dist.js')],
        )
