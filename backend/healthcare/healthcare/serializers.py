from rest_framework import serializers
from django.contrib.auth.models import User
class registerSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only = True , required = True , style = {'input_type' : 'password'})
    password  =serializers.CharField(write_only = True , style={'input_type': 'password'}, required =True)
    class Meta :
        model = User 
        fields = ['username' , 'email' , 'password' , 'password1' ]
        
    def validate(self, data):
        if data['password1'] != data['password'] :
            raise serializers.ValidationError({'password' : 'Password do not match'})
        return data
    def create(self, validated_data):
        validated_data.pop('password1' , None)
        user = User.objects.create_user(**validated_data)
        return user
    
class loginSerializers(serializers.ModelSerializer) :
    username = serializers.CharField()
    password = serializers.CharField(write_only = True , required =True , style ={'input_type' :'password'})
    class Meta :
        model = User 
        fields = ['username' , 'password']
class userSerializers(serializers.ModelSerializer) :
    class Meta :
        model = User 
        fields = ['username' , 'email'  ]
