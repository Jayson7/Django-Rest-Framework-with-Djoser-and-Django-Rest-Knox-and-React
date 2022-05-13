from django.shortcuts import render
from yaml import serialize
from .serializer import ProductSerializer
from .models import Product
from rest_framework import response, status
from rest_framework.decorators import api_view




# Create your views here.
@api_view(['GET'])
def Homepage(request):
    products = Product.objects.all()
    serialize = ProductSerializer(products, many=True)
    return response.Response(serialize.data)