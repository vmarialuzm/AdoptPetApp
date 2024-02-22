from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Pet
from .serializers import PetSerializer

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    permission_classes = [AllowAny]

