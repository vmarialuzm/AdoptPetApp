from django.urls import path
from . import views


urlpatterns = [
    path('list/', views.PetListViewSet.as_view()),
    path('bysize/', views.PetBySize.as_view())

]