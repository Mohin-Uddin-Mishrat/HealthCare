from .models import contactUsModel , serviceModel , appointmentModel, reviewModel
from authApi.models import Doctor ,Availebletime
from rest_framework import serializers
from django.contrib.auth.models import User
class contactUsSerializers(serializers.ModelSerializer):
    class Meta :
        model = contactUsModel
        fields = '__all__'

class serviceSerializers(serializers.ModelSerializer):
    class Meta :
        model = serviceModel
        fields = '__all__'

class appointmentSerializers(serializers.ModelSerializer):
    doctor = serializers.SlugRelatedField(
        queryset=Doctor.objects.all(), 
        slug_field='user__username'  # Use the username from the related User model
    )
    user=serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username') 
    time= serializers.SlugRelatedField(queryset=Availebletime.objects.all(), slug_field='name')  
    class Meta :
        model = appointmentModel
        fields = '__all__'
class reviewSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')  # Accept username
    class Meta :
        model = reviewModel
        fields = '__all__'
