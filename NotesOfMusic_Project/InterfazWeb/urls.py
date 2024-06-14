from django.urls import path
from . views import mainView, foldView, noteView

urlpatterns = [
    path('', mainView, name='mainView'),
    path('fold.html', foldView, name='fold'),
    path('note.html', noteView, name='note'),
]
