from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Usuario

@receiver(pre_save, sender=Usuario)
def calcular_imc(sender, instance, **kwargs):
    if instance.altura and instance.peso:
        instance.imc = instance.peso / (instance.altura * instance.altura)
