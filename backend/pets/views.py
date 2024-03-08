from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Pet
from .serializers import PetSerializer

class PetListViewSet(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        if Pet.objects.all().exists():
            pets = Pet.objects.all()
            serializer = PetSerializer(pets, many=True)

            return Response({'pets': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class PetBySize(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        size = request.query_params.get('size')
        pets = Pet.objects.filter(size=size)
        serializer = PetSerializer(pets, many=True)

        if Pet.objects.filter(size=size):
            return Response({'pets': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
