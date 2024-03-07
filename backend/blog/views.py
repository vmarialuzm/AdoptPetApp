from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from .models import Blog
from .serializers import BlogSerializer

class BlogListViewSet(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        if Blog.objects.all().exists():
            blogs = Blog.objects.all()
            serializer = BlogSerializer(blogs, many=True)

            return Response({'blogs': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No blogs found'}, status=status.HTTP_404_NOT_FOUND)
