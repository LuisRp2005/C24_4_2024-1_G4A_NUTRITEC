from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from . import views
from .views import APIRoot

router = routers.DefaultRouter()
router.register(r'Usuario', views.UsuarioView)
router.register(r'TipoIMC', views.TipoIMCView)
router.register(r'Ejercicio', views.EjercicioView)
router.register(r'AsignacionEjercicio', views.AsignacionEjercicioView)
router.register(r'CategoriaComida', views.CategoriaComidaView)
router.register(r'Comida', views.ComidaView)
router.register(r'AsignacionComida', views.AsignacionComidaView)
router.register(r'RegistroIMC', views.RegistroIMCView)

urlpatterns = [
    path('', APIRoot.as_view(), name='api-root'),
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title="NUTRITEC API"))
]
