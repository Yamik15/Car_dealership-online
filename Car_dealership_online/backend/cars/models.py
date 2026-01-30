from django.db import models
from django.utils import timezone

class Car(models.Model):
    
    # 1. id - автоматически создаётся Django (primary key)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    mileage = models.IntegerField()
    color = models.CharField(max_length=50)
    transmission = models.CharField(max_length=50)
    engine_capacity = models.FloatField()
    fuel_type = models.CharField(max_length=50)
    description = models.TextField()
    image_urls = models.TextField()
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'cars'
    
    def __str__(self):
        return f"{self.brand} {self.model}"