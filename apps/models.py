from sre_parse import CATEGORIES
from unicodedata import category
from django.db import models

# Create your models here.
CATEGORIES = (
    ('F', 'Fruit'),
    ('V', 'Vegetable'),
    ('D', 'Drink'),
    ('O', 'Other'),
)

class Product(models.Model):
    name_of_product = models.CharField(max_length=100)
    price = models.IntegerField()
    owner = models.ForeignKey('auth.User', related_name='products', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    quantity = models.IntegerField(default=1)
    image = models.ImageField(upload_to='images/')
    category = models.CharField(max_length=1, choices=CATEGORIES, default='O')
        
    
    
    def __str__(self):
        return self.name_of_product
    
    