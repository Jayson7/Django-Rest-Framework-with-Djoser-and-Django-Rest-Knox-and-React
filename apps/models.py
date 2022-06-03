from sre_parse import CATEGORIES
from unicodedata import category
from django.db import models

# Create your models here.
CATEGORIES = (
    ('Fruit', 'Fruit'),
    ('Vegetable', 'Vegetable'),
    ('Drink', 'Drink'),
    ('Other', 'Other'),
)

class Product(models.Model):
    name_of_product = models.CharField(max_length=100)
    price = models.IntegerField()
    owner = models.ForeignKey('auth.User', related_name='products', on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    quantity = models.IntegerField(default=1)
    image = models.ImageField(upload_to='images/')
    category = models.CharField(max_length=15, choices=CATEGORIES)
    views = models.IntegerField(default=0)

    
    
    def __str__(self):
        return self.name_of_product

class CartProduct(models.Model):
    owner = models.ForeignKey('auth.User', related_name='carts', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', related_name='addproduct', on_delete=models.CASCADE)    
    quantity = models.IntegerField(default=1)
    price = models.IntegerField()
    
    def __str__(self):
        return self.product.name_of_product