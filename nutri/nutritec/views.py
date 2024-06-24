from django.shortcuts import render
from rest_framework import viewsets, generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Usuario, TipoIMC, Ejercicio, AsignacionEjercicio, CategoriaComida, Comida, AsignacionComida, RegistroIMC
from .serializer import UsuarioSerializer, TipoIMCSerializer, EjercicioSerializer, AsignacionEjercicioSerializer, CategoriaComidaSerializer, ComidaSerializer, AsignacionComidaSerializer, RegistroIMCSerializer

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

@api_view(['GET'])
def login_user(request):
    email = request.GET.get('correo')
    password = request.GET.get('contraseña')

    if not email or not password:
        return Response({'error': 'Por favor ingrese correo electrónico y contraseña'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = Usuario.objects.get(correo=email, contraseña=password)
        if user.rol == 1:
            return Response({'message': 'Inicio de sesión exitoso', 'rol': user.rol}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Usuario no autorizado'}, status=status.HTTP_403_FORBIDDEN)
    except Usuario.DoesNotExist:
        return Response({'error': 'Credenciales incorrectas'}, status=status.HTTP_401_UNAUTHORIZED)
