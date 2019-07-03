from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'lender', LenderViewSet)
router.register(r'product', ProductViewSet)
router.register(r'buyer', BuyerViewSet)
router.register(r'invoice',InvoiceViewSet)
router.register(r'retailer', RetailerViewSet)

urlpatterns = [
    path("", include(router.urls))
]