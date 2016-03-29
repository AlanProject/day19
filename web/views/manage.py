from django.shortcuts import render,HttpResponse
from web.forms import manage
from web import models
# Create your views here.
def index(request):

    forms = manage.CreateHost(request.POST)
    # print forms.groupname
    return render(request,'mange/index.html',{'forms':forms})