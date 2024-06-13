from django.db import models
from django.utils import timezone

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    contraseña = models.CharField(max_length=45)
    correo = models.CharField(max_length=45)
    altura = models.FloatField(null=True)
    peso = models.FloatField(null=True)
    rol = models.IntegerField(null=True)
    fecha_nacimiento = models.DateField(null=True)
    genero = models.CharField(max_length=1, null=True)
    imc = models.FloatField(null=True)

    def save(self, *args, **kwargs):
        if self.altura and self.peso:
            self.imc = self.peso / (self.altura * self.altura)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.nombre} {self.apellido}'

    class Meta:
        db_table = 'nut_usuario'

class TipoIMC(models.Model):
    id_tipo_imc = models.AutoField(primary_key=True)
    tipo_imc = models.CharField(max_length=45, null=True)
    descripcion_imc = models.CharField(max_length=45, null=True)

    def __str__(self):
        return self.tipo_imc

    class Meta:
        db_table = 'nut_tipo_imc'

class Ejercicio(models.Model):
    id_ejercicio = models.AutoField(primary_key=True)
    nombre_ejercicio = models.CharField(max_length=45, null=True)
    descripcion_ejercicio = models.CharField(max_length=45, null=True)
    nivel_dificultad = models.CharField(max_length=45, null=True)
    tipo_imc = models.ForeignKey(TipoIMC, on_delete=models.CASCADE)
    images = models.ImageField(upload_to="nutri/", null=True, blank=True)

    def __str__(self):
        return self.nombre_ejercicio

    class Meta:
        db_table = 'nut_ejercicio'

class AsignacionEjercicio(models.Model):
    id_asignacion_ejercicio = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    ejercicio = models.ForeignKey(Ejercicio, on_delete=models.CASCADE)
    fecha_hora_asignacion = models.DateTimeField(null=True)

    def save(self, *args, **kwargs):
        if not self.fecha_hora_asignacion:
            self.fecha_hora_asignacion = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.usuario} - {self.ejercicio}'

    class Meta:
        db_table = 'nut_asignacion_ejercicio'

class CategoriaComida(models.Model):
    id_categoria_comida = models.AutoField(primary_key=True)
    nombre_categoria = models.CharField(max_length=45, null=True)

    def __str__(self):
        return self.nombre_categoria

    class Meta:
        db_table = 'nut_categoria_comida'

class Comida(models.Model):
    id_comida = models.AutoField(primary_key=True)
    categoria = models.ForeignKey(CategoriaComida, on_delete=models.CASCADE)
    nombre_comida = models.CharField(max_length=45, null=True)
    images = models.ImageField(upload_to="nutri/", null=True, blank=True)
    calorias = models.IntegerField(null=True)

    def __str__(self):
        return self.nombre_comida

    class Meta:
        db_table = 'nut_comida'

class AsignacionComida(models.Model):
    id_asignacion_comida = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    comida = models.ForeignKey(Comida, on_delete=models.CASCADE)
    fecha_hora_registro = models.DateTimeField(null=True)

    def save(self, *args, **kwargs):
        if not self.fecha_hora_registro:
            self.fecha_hora_registro = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.usuario} - {self.comida}'

    class Meta:
        db_table = 'nut_asignacion_comida'

class RegistroIMC(models.Model):
    id_registro_imc = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    tipo_imc = models.ForeignKey(TipoIMC, on_delete=models.CASCADE)
    fecha_hora_registro = models.DateTimeField(null=True)

    def save(self, *args, **kwargs):
        if not self.fecha_hora_registro:
            self.fecha_hora_registro = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.usuario} - {self.tipo_imc} ({self.fecha_hora_registro})'

    class Meta:
        db_table = 'nut_registro_imc'
