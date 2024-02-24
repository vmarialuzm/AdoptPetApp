from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'pet', views.PetViewSet, basename='pet'),

urlpatterns = [
    path('', include(router.urls)),

]