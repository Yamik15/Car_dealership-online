from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = [
            'id', 'brand', 'model', 'year', 'price', 'mileage',
            'color', 'transmission', 'engine_capacity', 'fuel_type',
            'description', 'image_urls', 'status', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']