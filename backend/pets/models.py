from django.db import models
from accounts.models import CustomUser

class Pet(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    breed = models.CharField(max_length=50)
    image = models.FileField(upload_to='pet-post-image')
    age = models.IntegerField(default=0)

    SIZE_CHOICES = [
        ("S", "Pequeño"),
        ("M", "Mediano"),
        ("L", "Grande")
    ]
    size = models.CharField(max_length=1,choices=SIZE_CHOICES)

    GENDER_CHOICES = [
        ("F", "Femenino"),
        ("M", "Masculino")
    ]
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    