from django.urls import re_path

from ngiautocomplete.views import objects, search


urlpatterns = [
    re_path(r'^objects/', objects),
    re_path(r'^search/', search),
]
