from django.contrib import admin
from .models import Car

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    # Поля для отображения в списке
    list_display = (
        'id',
        'brand',
        'model',
        'year',
        'price',
        'status',
    )
    
    # Поля для поиска
    search_fields = (
        'brand',
        'model',
        'color',
        'description',
    )
    
    # Поля в форме редактирования (все поля из ТЗ в том же порядке)
    fields = (
        'brand',
        'model',
        'year',
        'price',
        'mileage',
        'color',
        'transmission',
        'engine_capacity',
        'fuel_type',
        'description',
        'image_urls',
        'status',
        'created_at',
        'updated_at',
    )
    
    # Поля только для чтения
    readonly_fields = ('created_at', 'updated_at')