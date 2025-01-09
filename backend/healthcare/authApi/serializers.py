from rest_framework import serializers
from .models import Doctor , Patient, Designation ,Specialization , Availebletime
class doctorSerializer(serializers.ModelSerializer) :
    designation=serializers.StringRelatedField(many = True )
    specialization=serializers.StringRelatedField(many=True)
    availabletime=serializers.StringRelatedField(many= True)
    user=serializers.StringRelatedField(many= False)
    class Meta :
        model = Doctor
        fields = '__all__'

class patienSerializers(serializers.ModelSerializer) :
    user = serializers.StringRelatedField(many= False)
    class Meta :
        model= Patient
        fields = '__all__'
class designationSerializers(serializers.ModelSerializer) :
    class Meta :
        model= Designation
        fields = '__all__'
class specializationSerializers(serializers.ModelSerializer) :
    class Meta :
        model= Specialization
        fields = '__all__'
class availableTimeSerializers(serializers.ModelSerializer) :
    class Meta :
        model= Availebletime
        fields = '__all__'