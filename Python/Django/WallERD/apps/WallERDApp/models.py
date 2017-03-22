from __future__ import unicode_literals

from django.db import models

# Create your models here.
class user(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
class message(models.Model):
    message = models.TextField(max_length=1000)
    user_id = models.ForeignKey(user)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
class comment(models.Model):
    comment = models.TextField(max_length=1000)
    message_id = models.ForeignKey(message)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
