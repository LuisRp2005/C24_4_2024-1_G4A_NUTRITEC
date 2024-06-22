from rest_framework import serializers
from .models import Usuario,TipoIMC,Ejercicio,AsignacionEjercicio,CategoriaComida
from .models import Comida,AsignacionComida,RegistroIMC
from datetime import datetime

# the below code fragment can be found in:

class UsuarioSerializer(serializers.ModelSerializer):
    fecha_nacimiento = serializers.SerializerMethodField()

    class Meta:
        model = Usuario
        fields = '__all__'

    def get_fecha_nacimiento(self, obj):
        if isinstance(obj.fecha_nacimiento, datetime):
            return obj.fecha_nacimiento.date()
        return obj.fecha_nacimiento

class TipoIMCSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoIMC
        fields = '__all__'

class EjercicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ejercicio
        fields = '__all__'

class AsignacionEjercicioSerializer(serializers.ModelSerializer):   
    class Meta:
        model = AsignacionEjercicio
        fields = '__all__'

class CategoriaComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaComida
        fields = '__all__'

class ComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comida
        fields = '__all__'

class AsignacionComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsignacionComida
        fields = '__all__'

class RegistroIMCSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroIMC
        fields = '__all__'
        
