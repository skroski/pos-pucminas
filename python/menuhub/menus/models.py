from unicodedata import category
from django.db import models

# Create your models here.

class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    website = models.CharField(max_length=200)
    def __str__(self):
        return self.name
    
class MenuItem(models.Model):
    category = models.CharField(max_length=200)
    description = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    def __str__(self):
        return f"[MenuItem] description: {self.description[:50]}"