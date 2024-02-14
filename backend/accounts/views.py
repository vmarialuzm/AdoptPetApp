from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from accounts.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
