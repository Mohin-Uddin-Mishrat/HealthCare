from django.contrib import admin
from .models import Designation, Specialization ,Availebletime ,Patient , Doctor
# Register your models here.
class SpecializationAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',), }
class DesignationAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',), }
admin.site.register(Designation ,DesignationAdmin)
admin.site.register(Specialization , SpecializationAdmin)
admin.site.register(Availebletime)
admin.site.register(Patient)
admin.site.register(Doctor)
