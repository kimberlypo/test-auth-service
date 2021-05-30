from django.db import models

# Create your models here.
class Lead(models.Model):
    username = models.CharField(max_length=40, unique=True)
    email = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=40)
    groups = models.CharField(max_length=40)
    permissions = models.CharField(max_length=40)

