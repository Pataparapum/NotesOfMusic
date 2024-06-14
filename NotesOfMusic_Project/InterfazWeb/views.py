from django.shortcuts import render
from .models import Archivo

# Create your views here.
def mainView(request):
    archivos = Archivo.objects.all()
    context = {
        'archivos':archivos,
    }
    return render(request, "main.html", context)

def foldView(request):
    context = {}
    return render(request, "fold.html", context)

def noteView(request):
    context = {}
    return render(request, "note.html", context)