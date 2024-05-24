from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Usuario, TipoIMC, Ejercicio, AsignacionEjercicio, CategoriaComida
from .models import Comida, AsignacionComida, RegistroIMC
from .serializer import UsuarioSerializer, TipoIMCSerializer, EjercicioSerializer, AsignacionEjercicioSerializer
from .serializer import CategoriaComidaSerializer, ComidaSerializer, AsignacionComidaSerializer, RegistroIMCSerializer

class APIRoot(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        return Response({
            "Usuario": reverse('usuario-list', request=request),
            "TipoIMC": reverse('tipoimc-list', request=request),
            "Ejercicio": reverse('ejercicio-list', request=request),
            "AsignacionEjercicio": reverse('asignacionejercicio-list', request=request),
            "CategoriaComida": reverse('categoriacomida-list', request=request),
            "Comida": reverse('comida-list', request=request),
            "AsignacionComida": reverse('asignacioncomida-list', request=request),
            "RegistroIMC": reverse('registroimc-list', request=request),
        })

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class TipoIMCView(viewsets.ModelViewSet):
    serializer_class = TipoIMCSerializer
    queryset = TipoIMC.objects.all()

class EjercicioView(viewsets.ModelViewSet):
    serializer_class = EjercicioSerializer
    queryset = Ejercicio.objects.all()

class AsignacionEjercicioView(viewsets.ModelViewSet):
    serializer_class = AsignacionEjercicioSerializer
    queryset = AsignacionEjercicio.objects.all()

class CategoriaComidaView(viewsets.ModelViewSet):
    serializer_class = CategoriaComidaSerializer
    queryset = CategoriaComida.objects.all()

class ComidaView(viewsets.ModelViewSet):
    serializer_class = ComidaSerializer
    queryset = Comida.objects.all()

class AsignacionComidaView(viewsets.ModelViewSet):
    serializer_class = AsignacionComidaSerializer
    queryset = AsignacionComida.objects.all()

class RegistroIMCView(viewsets.ModelViewSet):
    serializer_class = RegistroIMCSerializer
    queryset = RegistroIMC.objects.all()
