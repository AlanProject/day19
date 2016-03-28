#!/usr/bin/env python
#-*- coding:utf-8 -*-
from web import models
from django import forms
class CreateHost(forms.Form):
    hostname = forms.CharField(max_length=32,
                               widget=forms.TextInput(attrs={'class':'form-control','placeholder':u'主机名','edit':'true'}),
    )
    ipaddress = forms.GenericIPAddressField(protocol="ipv4",
                                            error_messages={'required':u'IP地址格式不正确'},
                                            widget=forms.TextInput(attrs={'class':'form-control','placeholder':u'IP地址','edit':'true'})
                                            )

    groupname = forms.IntegerField(widget=forms.Select())

    def __init__(self,*arg,**kwargs):
        super(CreateHost,self).__init__(*arg, **kwargs)
        group = models.GroupList.objects.all().values_list()
        self.fields['groupname'].widget.choices = group
class CreateGroup(forms.Form):
    groupname = forms.CharField(max_length=32)