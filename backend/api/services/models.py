from django.db import models

# Create your models here.
class Services(models.Model):
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    title = models.CharField(max_length=55)
    meta_description = models.CharField(max_length=160, blank=True)
    description = models.TextField()


    def __str__(self):
        return self.title