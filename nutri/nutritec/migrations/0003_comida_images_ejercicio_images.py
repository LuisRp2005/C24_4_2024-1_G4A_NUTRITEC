# Generated by Django 5.0.6 on 2024-06-16 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutritec', '0002_remove_comida_images_remove_ejercicio_images_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='comida',
            name='images',
            field=models.ImageField(blank=True, null=True, upload_to='nutri/comidas/'),
        ),
        migrations.AddField(
            model_name='ejercicio',
            name='images',
            field=models.ImageField(blank=True, null=True, upload_to='nutri/ejercicios/'),
        ),
    ]
