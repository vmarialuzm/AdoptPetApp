from rest_framework import serializers
from .models import Blog
from accounts.serializers import CustomUserSerializer

class BlogSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    class Meta:
        model = Blog
        fields = [
            'id',
            'user',
            'image',
            'date',
            'minutes',
            'title',
            'content'
        ]