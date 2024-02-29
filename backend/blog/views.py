from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Blog
from .serializers import BlogSerializer

class PetViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]
