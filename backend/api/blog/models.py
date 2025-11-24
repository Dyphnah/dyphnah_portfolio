from django.db import models
from django.utils.text import slugify

class Blog(models.Model):
    CATEGORY_CHOICES = [
        ("Mental Health", "Mental Health"),
        ("Finance", "Finance"),
        ("Tech", "Tech"),
        ("Lifestyle", "Lifestyle"),
        ("Education", "Education"),
    ]

    title = models.CharField(max_length=55)
    image = models.ImageField(upload_to='blog/', blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)
    meta_description = models.CharField(max_length=160, blank=True)
    content = models.TextField()
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default="Tech")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["updated_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
