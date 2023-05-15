from django.shortcuts import render
from django.http import HttpResponse

def members(request):
    return HttpResponse("Hello world!")


def login(request):
    return render(request,'login.html')