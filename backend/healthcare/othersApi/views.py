from django.shortcuts import render

from .models import contactUsModel , serviceModel , appointmentModel ,reviewModel
from .serializers import contactUsSerializers , serviceSerializers , appointmentSerializers, reviewSerializer
from rest_framework import viewsets,filters
from rest_framework.permissions import AllowAny


class contactView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = contactUsModel.objects.all()
    serializer_class = contactUsSerializers
class ServiceView(viewsets.ModelViewSet):
    permission_classes =[AllowAny]
    queryset = serviceModel.objects.all()
    serializer_class = serviceSerializers
    
class reviewView(viewsets.ModelViewSet):
    queryset = reviewModel.objects.all()
    serializer_class = reviewSerializer
        
class appointementView(viewsets.ModelViewSet):
    queryset = appointmentModel.objects.all()
    serializer_class = appointmentSerializers

    def get_queryset(self):
        queryset = super().get_queryset()
        user_id = self.request.query_params.get('user_id')  
        if user_id:
            return queryset.filter(user_id=user_id)  
        else:
            return queryset
