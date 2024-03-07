from django.urls import path
from . import views


urlpatterns = [
    path('list/', views.PetViewSet.as_view()),

]