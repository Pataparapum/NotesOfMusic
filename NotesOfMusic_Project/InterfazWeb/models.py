from django.db import models

# Create your models here.
class NoteFold(models.Model):
    id_noteFold = models.IntegerField(db_column= 'idNoteFold', primary_key=True)
    tipo = models.CharField(max_length=10, verbose_name='tipo')
    
    class Meta:
        db_table = "NoteFolds"
        verbose_name = "NoteFold"
        verbose_name_plural = "NoteFolds"
        
    def __str__(self):
        return (self.tipo)

class Archivo(models.Model):
    id_archivo = models.AutoField(db_column='idArchivo', primary_key=True)
    nombre = models.CharField(max_length=30, verbose_name="nombre")
    origen = models.CharField(max_length=30, verbose_name="origen")
    tipo = models.ForeignKey("NoteFold", on_delete=models.DO_NOTHING, db_column='idNoteFold', verbose_name="tipo")
    
    class Meta:
        db_table = "Archivos"
        verbose_name = "Archivo"
        verbose_name_plural = "Archivos"
        
    def __str__(self):
        tipo = self.tipo
        text = ""
        if tipo == 1:
            text = "Carpeta: " + (self.nombre)
        else:
            text = "Nota: " + (self.nombre)
        return text
    