from rest_framework import serializers
from .models import Order
from users.serializers import UserSerializer
from cars.serializers import CarSerializer

class OrderSerializer(serializers.ModelSerializer):
    # Для чтения: полные объекты
    user_detail = UserSerializer(source='user', read_only=True)
    car_detail = CarSerializer(source='car', read_only=True)
    
    # Для записи: только ID (write_only - не показываем в ответе)
    user_id = serializers.IntegerField(write_only=True)
    car_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'user', 'user_id', 'user_detail', 
            'car', 'car_id', 'car_detail',
            'delivery_address', 'delivery_date', 'status',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']