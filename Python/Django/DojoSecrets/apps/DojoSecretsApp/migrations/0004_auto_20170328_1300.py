# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-28 17:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LogAndRegApp', '0001_initial'),
        ('DojoSecretsApp', '0003_auto_20170327_1639'),
    ]

    operations = [
        migrations.RenameField(
            model_name='secret',
            old_name='user',
            new_name='author',
        ),
        migrations.RemoveField(
            model_name='like',
            name='related_likes',
        ),
        migrations.AddField(
            model_name='like',
            name='liked',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='LogAndRegApp.User'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='like',
            name='likes',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='DojoSecretsApp.Secret'),
        ),
    ]
