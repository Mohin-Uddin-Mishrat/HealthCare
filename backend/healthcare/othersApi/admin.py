from django.contrib import admin
from .models import serviceModel , contactUsModel , appointmentModel
# Register your models here.
admin.site.register(serviceModel)
admin.site.register(contactUsModel)
admin.site.register(appointmentModel)