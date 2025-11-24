from django.db import models

# Create your models here.
class Portfolio(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    technologies = models.CharField(max_length=200, help_text="Comma-separated list")
    GitHublink = models.URLField(blank=True, null=True)
    deployedlink = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to="portfolio_images/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)



    def __str__(self):
        return self.title