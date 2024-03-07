from django.urls import path
from . import views


urlpatterns = [
    path('list/', views.BlogListViewSet.as_view()),

]