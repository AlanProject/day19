from __future__ import unicode_literals

from django.db import models

# Create your models here.
class HostList(models.Model):
    hid = models.AutoField(primary_key=True,)
    hostname = models.CharField(max_length=32,)
    ipaddress = models.GenericIPAddressField(protocol="ipv4")
    gid = models.ForeignKey('GroupList',to_field='gid')

class GroupList(models.Model):
    gid = models.AutoField(primary_key=True,)
    groupname = models.CharField(max_length=32,)
