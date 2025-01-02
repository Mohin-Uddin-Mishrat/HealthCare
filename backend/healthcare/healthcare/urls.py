from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from .views import registerView , loginView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('othersApi.urls')),
    path('user/',include('authApi.urls')),
    path('register/',registerView.as_view() , name='register'),
    path('login/',loginView.as_view() , name='login'),
    path('auth/token/refresh/',TokenRefreshView.as_view() , name='token'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
