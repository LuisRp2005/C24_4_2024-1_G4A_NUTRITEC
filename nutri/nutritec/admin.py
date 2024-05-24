from django.contrib import admin
from .models import Usuario, TipoIMC, Ejercicio, AsignacionEjercicio, CategoriaComida, Comida, AsignacionComida, RegistroIMC

# Register your models here.
admin.site.register(Usuario)
admin.site.register(TipoIMC)
admin.site.register(Ejercicio)
admin.site.register(AsignacionEjercicio)
admin.site.register(CategoriaComida)
admin.site.register(Comida)
admin.site.register(AsignacionComida)
admin.site.register(RegistroIMC)
