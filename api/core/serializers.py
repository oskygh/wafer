from rest_framework import serializer
from .models import * 

class LenderSerializer(serializer.ModelSerializer):
    class Meta:
        model = Lender
        fields = "__all__"

class RetailerSerializer(serializer.ModelSerializer):
    class Meta:
        model = Retailer
        fields = "__all__"

class ProductSerializer(serializer.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class BuyerSerializer(serializer.ModelSerializer):
    class Meta:
        model = Buyer
        fields = "__all__"

class InvoiceSerializer(serializer.ModelSerializer):
    class Meta:
        model = Invoice
        fields = "__all__"