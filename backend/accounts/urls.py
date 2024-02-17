from django.urls import include, path
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.CustomUserViewSet, basename='users'),

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.LoginApiView.as_view(), name='login'),
    path('docs/', include_docs_urls(title="Users API"))

]
