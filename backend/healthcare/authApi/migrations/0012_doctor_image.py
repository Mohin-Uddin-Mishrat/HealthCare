# Generated by Django 5.1.4 on 2025-01-08 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authApi', '0011_remove_doctor_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='authApi/images/'),
        ),
    ]
