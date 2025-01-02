from django.db import models
from authApi.models import Patient , Doctor , Availebletime
from django.contrib.auth.models import User
# Create your models here.
class serviceModel(models.Model) :
    name = models.CharField(max_length=20)
    description =models.TextField()
    image = models.ImageField(upload_to='othersApi/images/')

    def __str__(self):
        return self.name

class contactUsModel(models.Model) :
    name = models.CharField(max_length=20)
    phone =models.CharField(max_length=12)
    problem = models.TextField()
    def __str__(self):
        return self.name
appointment_types = [
    ('Online', 'Online'),
    ('Offline', 'Offline'),
]
appointment_Status = [
    ('Pending', 'Pending'),
    ('Running', 'Running'),
    ('Completed' , 'Completed')
]
class appointmentModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank= True , null= True)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    appointmentTypes = models.CharField(choices=appointment_types , max_length=20)
    appointment_status = models.CharField(choices = appointment_Status, max_length = 10, default = "Pending")
    symptom = models.TextField()
    time = models.ForeignKey(Availebletime, on_delete=models.CASCADE)
    cancel = models.BooleanField(default = False)
    def __str__(self):
        return f"{self.user.first_name} doctor:{self.doctor.user.first_name}"
class reviewModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank= True , null= True)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    comment = models.TextField()
    rating = models.IntegerField()
    time = models.DateTimeField(  auto_now_add=True)