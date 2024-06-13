# Generated by Django 5.0.6 on 2024-06-13 22:15

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
                ('id_categoria_comida', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_categoria', models.CharField(max_length=45, null=True)),
            ],
            options={
                'db_table': 'nut_categoria_comida',
            },
        ),
        migrations.CreateModel(
            name='TipoIMC',
            fields=[
                ('id_tipo_imc', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_imc', models.CharField(max_length=45, null=True)),
                ('descripcion_imc', models.CharField(max_length=45, null=True)),
            ],
            options={
                'db_table': 'nut_tipo_imc',
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=45)),
                ('apellido', models.CharField(max_length=45)),
                ('contraseña', models.CharField(max_length=45)),
                ('correo', models.CharField(max_length=45)),
                ('altura', models.FloatField(null=True)),
                ('peso', models.FloatField(null=True)),
                ('rol', models.IntegerField(null=True)),
                ('fecha_nacimiento', models.DateField(null=True)),
                ('genero', models.CharField(max_length=1, null=True)),
                ('imc', models.FloatField(null=True)),
            ],
            options={
                'db_table': 'nut_usuario',
            },
        ),
        migrations.CreateModel(
            name='Comida',
            fields=[
                ('id_comida', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_comida', models.CharField(max_length=45, null=True)),
                ('images', models.ImageField(blank=True, null=True, upload_to='nutri/')),
                ('calorias', models.IntegerField(null=True)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.categoriacomida')),
            ],
            options={
                'db_table': 'nut_comida',
            },
        ),
        migrations.CreateModel(
            name='Ejercicio',
            fields=[
                ('id_ejercicio', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_ejercicio', models.CharField(max_length=45, null=True)),
                ('descripcion_ejercicio', models.CharField(max_length=45, null=True)),
                ('nivel_dificultad', models.CharField(max_length=45, null=True)),
                ('images', models.ImageField(blank=True, null=True, upload_to='nutri/')),
                ('tipo_imc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.tipoimc')),
            ],
            options={
                'db_table': 'nut_ejercicio',
            },
        ),
        migrations.CreateModel(
            name='RegistroIMC',
            fields=[
                ('id_registro_imc', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_hora_registro', models.DateTimeField(null=True)),
                ('tipo_imc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.tipoimc')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.usuario')),
            ],
            options={
                'db_table': 'nut_registro_imc',
            },
        ),
        migrations.CreateModel(
            name='AsignacionEjercicio',
            fields=[
                ('id_asignacion_ejercicio', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_hora_asignacion', models.DateTimeField(null=True)),
                ('ejercicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.ejercicio')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.usuario')),
            ],
            options={
                'db_table': 'nut_asignacion_ejercicio',
            },
        ),
        migrations.CreateModel(
            name='AsignacionComida',
            fields=[
                ('id_asignacion_comida', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_hora_registro', models.DateTimeField(null=True)),
                ('comida', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.comida')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nutritec.usuario')),
            ],
            options={
                'db_table': 'nut_asignacion_comida',
            },
        ),
    ]
