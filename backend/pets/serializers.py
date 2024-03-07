from rest_framework import serializers
from .models import Pet
from accounts.serializers import CustomUserSerializer

class PetSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    class Meta:
        model = Pet
        fields = [
            'id',
            'user',
            'name',
            'breed',
            'image',
            'age'
            'size',
            'gender'
        ]