from django.urls import path,include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from . import views
from .views import APIRoot

router = routers.DefaultRouter()
router.register(r'Usuario', views.UsuarioView)

router1 = routers.DefaultRouter()
router1.register(r'TipoIMC', views.TipoIMCView)

router2 = routers.DefaultRouter()
router2.register(r'Ejercicio', views.EjercicioView)

router3 = routers.DefaultRouter()
router3.register(r'AsignacionEjercicio', views.AsignacionEjercicioView)

router4 = routers.DefaultRouter()
router4.register(r'CategoriaComida', views.CategoriaComidaView)

router5 = routers.DefaultRouter()
router5.register(r'Comida', views.ComidaView)

router6 = routers.DefaultRouter()
router6.register(r'AsignacionComida', views.AsignacionComidaView)

router7 = routers.DefaultRouter()
router7.register(r'RegistroIMC', views.RegistroIMCView)

urlpatterns =[
    path('', APIRoot.as_view(), name='api-root'),
    path('', include(router.urls)),
    path('', include(router1.urls)),
    path('', include(router2.urls)),
    path('', include(router3.urls)),
    path('', include(router4.urls)),
    path('', include(router5.urls)),
    path('', include(router6.urls)),
    path('', include(router7.urls)),
    path('docs/', include_docs_urls(title="NUTRITEC API"))
]