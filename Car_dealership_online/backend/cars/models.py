from django.db import models
from django.utils import timezone

class Car(models.Model):
    """
    Модель автомобиля (ТОЧНО по ТЗ без лишнего)
    Поля из ТЗ:
    1) id - int, PK
    2) brand - varchar
    3) model - varchar
    4) year - int
    5) price - decimal
    6) mileage - int
    7) color - varchar
    8) transmission - varchar
    9) engine_capacity - float
    10) fuel_type - varchar
    11) description - text
    12) image_urls - text[]
    13) status - varchar
    14) created_at - timestamp
    15) updated_at timestamp
    """
    
    # 1. id - автоматически создаётся Django (primary key)
    
    # 2. brand - varchar
    brand = models.CharField(max_length=100)
    
    # 3. model - varchar
    model = models.CharField(max_length=100)
    
    # 4. year - int
    year = models.IntegerField()
    
    # 5. price - decimal
    price = models.DecimalField(max_digits=12, decimal_places=2)
    
    # 6. mileage - int
    mileage = models.IntegerField()
    
    # 7. color - varchar
    color = models.CharField(max_length=50)
    
    # 8. transmission - varchar
    transmission = models.CharField(max_length=50)
    
    # 9. engine_capacity - float
    engine_capacity = models.FloatField()
    
    # 10. fuel_type - varchar
    fuel_type = models.CharField(max_length=50)
    
    # 11. description - text
    description = models.TextField()
    
    # 12. image_urls - text[] 
    # В SQLite нет ArrayField, храним как текст
    image_urls = models.TextField()
    
    # 13. status - varchar
    status = models.CharField(max_length=50)
    
    # 14. created_at - timestamp
    created_at = models.DateTimeField(default=timezone.now)
    
    # 15. updated_at - timestamp
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'cars'
    
    def __str__(self):
        return f"{self.brand} {self.model}"