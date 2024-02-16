from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.CustomUserViewSet, basename='users'),

urlpatterns = [
    path('', include(router.urls)),
]
