from rest_framework.routers import  DefaultRouter
from .views import ServiceView  , contactView , appointementView , reviewView
from django.urls import path,include


router = DefaultRouter()
router.register('service' , ServiceView)
router.register('contact' , contactView)
router.register('appointment' , appointementView)
router.register('review' , reviewView)
urlpatterns = [
    path('' , include(router.urls)),
]
