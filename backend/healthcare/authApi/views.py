from django.shortcuts import render
from .models import Doctor , Patient , Designation , Availebletime, Specialization
from .serializers import doctorSerializer , patienSerializers, designationSerializers,availableTimeSerializers,specializationSerializers
from rest_framework import viewsets,filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly,AllowAny
class doctorView(viewsets.ModelViewSet) :
    queryset = Doctor.objects.all()
    serializer_class = doctorSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['user__username', 'user__email' , 'designation__name', 'specialization__name']

class patientView(viewsets.ModelViewSet) :
    queryset = Patient.objects.all()
    serializer_class = patienSerializers

class designationView(viewsets.ModelViewSet) :
    queryset = Designation.objects.all()
    serializer_class = designationSerializers

class specializationView(viewsets.ModelViewSet) :
    queryset = Specialization.objects.all()
    serializer_class = specializationSerializers

class AvailableTimeForSpecificDoctor(filters.BaseFilterBackend):
    def filter_queryset(self, request, query_set, view):
        doctor_id = request.query_params.get("doctor_id")
        if doctor_id:
            return query_set.filter(doctor = doctor_id)
        return query_set
    
class availableTimeView(viewsets.ModelViewSet) :
    permission_classes =[IsAuthenticatedOrReadOnly]
    queryset = Availebletime.objects.all()
    serializer_class = availableTimeSerializers
    filter_backends= [AvailableTimeForSpecificDoctor]
