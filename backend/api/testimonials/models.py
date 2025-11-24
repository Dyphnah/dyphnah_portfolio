from django.db import models

# Create your models here.

class Testimonial(models.Model):
    name = models.CharField(max_length=100)  
    role = models.CharField(max_length=100, blank=True, null=True) 
    company = models.CharField(max_length=150, blank=True, null=True)
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True) 
    content = models.TextField()  
    created_at = models.DateTimeField(auto_now_add=True)
    is_featured = models.BooleanField(default=False)  

    def __str__(self):
        return f"{self.name} - {self.company or 'Individual'}"

