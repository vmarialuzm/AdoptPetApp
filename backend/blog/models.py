from django.db import models
from accounts.models import CustomUser

class Blog(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    image = models.FileField(upload_to='blog-post-image', default='default_image.jpg')
    date = models.DateField(auto_now_add=True)
    minutes = models.IntegerField(default=1)
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=250)

