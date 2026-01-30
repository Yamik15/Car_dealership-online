from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    # Поля для отображения в списке
    list_display = (
        'id',
        'user',
        'car',
        'delivery_date',
        'status',
        'created_at',
    )
    
    list_display_links = ('id', 'user', 'car')
    
    # Поля для поиска
    search_fields = (
        'id',
        'user__email',
        'car__brand',
        'car__model',
        'delivery_address',
        'status',
    )
    
    # Фильтры
    list_filter = (
        'status',
        'delivery_date',
        'created_at',
    )
    
    # Сортировка
    ordering = ('-created_at',)
    
    # Количество на странице
    list_per_page = 20
    
    # Поля в форме редактирования
    fields = (
        'user',
        'car',
        'delivery_address',
        'delivery_date',
        'status',
        'created_at',
        'updated_at',
    )
    
    # Поля только для чтения
    readonly_fields = ('created_at', 'updated_at')