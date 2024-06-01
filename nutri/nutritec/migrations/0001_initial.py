# Generated by Django 5.0.6 on 2024-05-19 04:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CategoriaComida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_categoria', models.CharField(max_length=45, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TipoIMC',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_imc', models.CharField(max_length=45, null=True)),
                ('descripcion_imc', models.CharField(max_length=45, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=45)),
                ('apellido', models.CharField(max_length=45)),
                ('correo', models.CharField(max_length=45)),
                ('altura', models.FloatField(null=True)),
                ('peso', models.FloatField(null=True)),
                ('rol', models.IntegerField(null=True)),
                ('fecha_nacimiento', models.DateField(null=True)),
                ('genero', models.CharField(max_length=1, null=True)),
                ('imc', models.FloatField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Comida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_comida', models.CharField(max_length=45, null=True)),
                ('calorias', models.IntegerField(null=True)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.categoriacomida')),
            ],
        ),
        migrations.CreateModel(
            name='Ejercicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_ejercicio', models.CharField(max_length=45, null=True)),
                ('descripcion_ejercicio', models.CharField(max_length=45, null=True)),
                ('nivel_dificultad', models.CharField(max_length=45, null=True)),
                ('tipo_imc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.tipoimc')),
            ],
        ),
        migrations.CreateModel(
            name='RegistroIMC',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_hora_registro', models.DateTimeField(null=True)),
                ('tipo_imc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.tipoimc')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='AsignacionEjercicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_hora_asignacion', models.DateTimeField(null=True)),
                ('ejercicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.ejercicio')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='AsignacionComida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_hora_registro', models.DateTimeField(null=True)),
                ('comida', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.comida')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.usuario')),
            ],
        ),
    ]