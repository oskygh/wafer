from rest_framework import viewsets
from .serializers import *
from .models import *

class LenderViewSet(viewsets.ModelViewSet):
    serializer_class = LenderSerializer
    queryset =Lender.objects.all()

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class RetailerViewSet(viewsets.ModelViewSet):
    serializer_class = RetailerSerializer
    queryset = Retailer.objects.all()

class BuyerViewSet(viewsets.ModelViewSet):
    serializer_class = BuyerSerializer
    queryset = Buyer.objects.all()

class InvoiceViewSet(viewsets.ModelViewSet):
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()