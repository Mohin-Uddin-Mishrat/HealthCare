# Generated by Django 5.1.4 on 2024-12-26 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authApi', '0004_doctor_availabletime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='availabletime',
            field=models.ManyToManyField(blank=True, to='authApi.availebletime'),
        ),
    ]
