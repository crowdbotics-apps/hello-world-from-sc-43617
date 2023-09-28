from django.conf import settings
from django.db import models
class Post(models.Model):
    'Generated Model'
    title = models.TextField()
    content = models.TextField()
