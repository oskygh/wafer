from django.db import models
from django.core.validators import RegexValidator

phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

class Lender (models.Model):
    lender_name = models.CharField(max_length=100)
    lender_location = models.CharField(max_length=100)
    lender_phonenumber = models.CharField(validators=[phone_regex], max_length=17)

    def __str__(self):
        return self.lender_name

class Retailer (models.Model):
    #Model
    retailer_name = models.CharField(max_length=100)
    retailer_location = models.CharField(max_length=100)
    retailer_account_number = models.IntegerField()
    retailer_banker = models.ForeignKey(Lender, on_delete=models.CASCADE)
    retailer_phone_number = models.CharField(validators=[phone_regex], max_length=17)

    def __str__(self):
        return self.retailer_name

class Product (models.Model):
    product_name = models.CharField(max_length=100)
    product_description = models.CharField(max_length=100)
    product_unitprice = models.DecimalField( max_digits=19, decimal_places=2)
    product_stock = models.DecimalField( max_digits=19)

    def __str__(self):
        return self.product_name




