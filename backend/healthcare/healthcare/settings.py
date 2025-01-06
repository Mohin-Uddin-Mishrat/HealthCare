import environ
env = environ.Env()
environ.Env.read_env()

from pathlib import Path
import dj_database_url

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')  

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool('DEBUG', default=False)  # Set DEBUG to False in production

ALLOWED_HOSTS = ['*']  # Add your Render app URL here

# REST framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication', 
    ],

    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
}

CORS_ORIGIN_ALLOW_ALL = True


# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'authApi',
    'othersApi',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware' ,
    
]

ROOT_URLCONF = 'healthcare.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'healthcare.wsgi.application'

# Database
# Use SQLite for local development
# In production, SQLite is fine for small apps, but ensure your DB file is stored in a persistent location
#DATABASES = {
#    'default': {
#        'ENGINE': env('DB_ENGINE'),  # Example: 'django.db.backends.postgresql'
#        'NAME': env('DB_NAME'),      # Example: 'mydatabase'
#        'USER': env('DB_USER'),      # Example: 'myuser'
#        'PASSWORD': env('DB_PASSWORD'),  # Example: 'mypassword'
#        'HOST': env('DB_HOST', default='localhost'),  # Example: 'localhost' or the database server address
#        'PORT': env('DB_PORT', default='5432'),       # Example: '5432' for PostgreSQL
#    }
#}

DATABASES = {
    'default': dj_database_url.config(
        # Replace this value with your local database's connection string.
        default='postgresql://mishrat:jsabYaC1T8Pwpp7HnOIpjQieYpl9CuZp@dpg-ctrr605umphs73fggsc0-a.oregon-postgres.render.com/hospital_udzk',
        conn_max_age=600
    )
}



# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'

# Ensure that Render handles static and media files correctly
# You might want to configure the `STATIC_ROOT` and `MEDIA_ROOT` to handle static and media files in production
STATIC_ROOT = BASE_DIR / 'staticfiles'  # Where to collect static files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'  # Directory for media files

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# SECURITY SETTINGS FOR PRODUCTION

# Use a secure setting for allowed hosts in production

# Define custom settings for Render deployment (for production environment)
