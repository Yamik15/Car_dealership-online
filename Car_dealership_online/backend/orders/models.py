from django.db import models
from django.utils import timezone

class Order(models.Model):
    """
    Модель заказа с ForeignKey
    """
    
    # ForeignKey к User
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        verbose_name='User',  # Меняем на английский
        related_name='orders'
    )
    
    # ForeignKey к Car
    car = models.ForeignKey(
        'cars.Car',
        on_delete=models.CASCADE,
        verbose_name='Car',  # Меняем на английский
        related_name='orders'
    )
    
    # Остальные поля
    delivery_address = models.TextField(
        verbose_name='Delivery address'  # Английский
    )
    
    delivery_date = models.DateField(
        verbose_name='Delivery date'  # Английский
    )
    
    status = models.CharField(
        max_length=50,
        verbose_name='Status'  # Английский
    )
    
    created_at = models.DateTimeField(
        default=timezone.now,
        verbose_name='Created at'  # Английский
    )
    
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name='Updated at'  # Английский
    )
    
    class Meta:
        db_table = 'orders'
        verbose_name = 'Order'  # ← ИЗМЕНЯЕМ ЭТО! Было: 'Заказ'
        verbose_name_plural = 'Orders'  # ← ИЗМЕНЯЕМ ЭТО! Было: 'Заказы'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Order #{self.id}"