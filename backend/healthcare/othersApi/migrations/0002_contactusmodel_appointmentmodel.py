# Generated by Django 5.1.4 on 2024-12-17 14:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authApi', '0001_initial'),
        ('othersApi', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='contactUsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('phone', models.CharField(max_length=12)),
                ('problem', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='appointmentModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appointmentTypes', models.CharField(choices=[('Online', 'Online'), ('Offline', 'Offline')], max_length=20)),
                ('appointment_status', models.CharField(choices=[('Pending', 'Pending'), ('Running', 'Running'), ('Completed', 'Completed')], default='Pending', max_length=10)),
                ('symptom', models.TextField()),
                ('cancel', models.BooleanField(default=False)),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authApi.doctor')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authApi.patient')),
                ('time', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authApi.availebletime')),
            ],
        ),
    ]