from django.db import models
from rest_framework import fields, serializers
from django.contrib.auth.models import User
from .models import Product, Review, Order, OrderItem, ShippingAddress

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
