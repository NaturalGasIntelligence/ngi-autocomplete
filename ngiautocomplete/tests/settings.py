from wagtail import VERSION as WAGTAIL_VERSION

SECRET_KEY = 'NOTSECRET'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'ngiautocomplete',
    }
}

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.staticfiles',
    'wagtail' if WAGTAIL_VERSION >= (3, 0) else "wagtail.core",
    'wagtail.documents',
    'wagtail.images',
    'wagtail.admin',
    'wagtail.sites',
    'wagtail.users',
    'taggit',
    'ngiautocomplete',
    'ngiautocomplete.tests.testapp',
)

MIDDLEWARE = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
            ],
        },
    },
]

ROOT_URLCONF = 'ngiautocomplete.tests.testapp.urls'

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
