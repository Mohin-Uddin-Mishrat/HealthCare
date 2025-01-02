from rest_framework.routers import DefaultRouter
from django.urls import path , include
from .views import doctorView , patientView , designationView, specializationView , availableTimeView
router = DefaultRouter()
router.register('doctor' ,doctorView )
router.register('patient' ,patientView )
router.register('designation' ,designationView )
router.register('specialization' ,specializationView )
router.register('availabletime' ,availableTimeView )
urlpatterns = [
    path('',include(router.urls)),
]

