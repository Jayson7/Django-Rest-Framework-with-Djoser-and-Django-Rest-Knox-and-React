from django.db import models

# Create your models here.


class Product(models.Model):
    name_of_product = models.CharField(max_length=100)
    price = models.IntegerField()
    owner = models.ForeignKey('auth.User', related_name='products', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    quantity = models.IntegerField(default=1)
    
    
    def __str__(self):
        return self.name_of_product
    
    