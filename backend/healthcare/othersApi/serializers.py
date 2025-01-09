from .models import contactUsModel , serviceModel , appointmentModel, reviewModel
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
    doctor= serializers.StringRelatedField(many=False)
    user= serializers.StringRelatedField(many=False)
    time= serializers.StringRelatedField(many=False)
    class Meta :
        model = appointmentModel
        fields = '__all__'
class reviewSerializer(serializers.ModelSerializer):
    class Meta :
        model = reviewModel
        fields = '__all__'
