from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Patient(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    mobile = models.CharField(max_length=12)
    image = models.ImageField(upload_to='authApi/images/')
    def __str__(self) :
        return f"{self.user.first_name}  {self.user.last_name}"

class Designation(models.Model):
    name = models.CharField(max_length=20)
    slug = models.SlugField(max_length = 40,null=True, blank=True)
    def __str__(self) :
        return self.name
    
class Specialization(models.Model):
    name = models.CharField(max_length=20)
    slug = models.SlugField(max_length = 40,null=True, blank=True)
    def __str__(self) :
        return self.name
    
class Availebletime(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self) :
        return self.name
    
    
class Doctor(models.Model):
    name = models.CharField( max_length=50 , blank=True , null= True)
    designation = models.ManyToManyField(Designation)
    specialization = models.ManyToManyField(Specialization)
    image = models.ImageField(upload_to='authApi/images/' , blank=True , null=True)
    fee = models.IntegerField()
    availabletime = models.ManyToManyField(Availebletime , blank=True )
  