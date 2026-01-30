import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Car_dealership_online.settings')

import django
django.setup()

from cars.models import Car
from django.db.models import Count

def create_default_cars():
    """Создаёт 9 тестовых автомобилей"""
    
    cars_data = [
        {
            'brand': 'Toyota',
            'model': 'Camry',
            'year': 2022,
            'price': 2650000,
            'mileage': 15000,
            'color': 'Белый',
            'transmission': 'auto',
            'engine_capacity': 2.5,
            'fuel_type': 'petrol',
            'description': 'Отличное состояние, один владелец, полный пакет опций, сервисная история.',
            'image_urls': 'https://carsweek.ru/upload/resize_cache/iblock/ea7/1200_900_1/4vq82xtlx1tfwtz9qxzr76zxtqqosu11.jpg',
            'status': 'available'
        },
        {
            'brand': 'BMW',
            'model': 'X5',
            'year': 2020,
            'price': 4200000,
            'mileage': 45000,
            'color': 'Черный',
            'transmission': 'auto',
            'engine_capacity': 3.0,
            'fuel_type': 'diesel',
            'description': 'Полный привод, кожаный салон, панорамная крыша, камеры 360.',
            'image_urls': 'https://ilc.su/templates/yootheme/cache/5f/x5-5f9a1f22.jpeg',
            'status': 'available'
        },
        {
            'brand': 'Renault',
            'model': 'Megane',
            'year': 2021,
            'price': 1200000,
            'mileage': 30000,
            'color': 'Черный',
            'transmission': 'manual',
            'engine_capacity': 1.5,
            'fuel_type': 'diesel',
            'description': 'Экономный расход, новая резина, предпродажная подготовка.',
            'image_urls': 'https://cdn.motor1.com/images/mgl/0l6g2/s1/2020-renault-megane-rs-trophy-facelift.jpg',
            'status': 'available'
        },
        {
            'brand': 'Kia',
            'model': 'Rio',
            'year': 2023,
            'price': 1650000,
            'mileage': 5000,
            'color': 'Красный',
            'transmission': 'auto',
            'engine_capacity': 1.6,
            'fuel_type': 'petrol',
            'description': 'Комплектация Prestige, мультимедиа с Apple CarPlay, кондиционер.',
            'image_urls': 'https://kolesa-uploads.ru/r/880x/b8337fd4-8056-48c4-b60f-c5ca951120c4/kia-rio1.jpg',
            'status': 'available'
        },
        {
            'brand': 'Mercedes-Benz',
            'model': 'E-Class',
            'year': 2019,
            'price': 3800000,
            'mileage': 60000,
            'color': 'Синий',
            'transmission': 'auto',
            'engine_capacity': 2.0,
            'fuel_type': 'diesel',
            'description': 'Пакет AMG, адаптивный круиз, массаж сидений, биксеноновые фары',
            'image_urls': 'https://a.d-cd.net/SBDFBg67fhbwZUUpoZPVM4hvqBg-1920.jpg',
            'status': 'available'
        },
        {
            'brand': 'Skoda',
            'model': 'Octavia',
            'year': 2022,
            'price': 1900000,
            'mileage': 20000,
            'color': 'Зеленый',
            'transmission': 'auto',
            'engine_capacity': 1.4,
            'fuel_type': 'petrol',
            'description': 'Лифтбек, климат-контроль, датчики света и дождя, парктроники',
            'image_urls': 'https://topruscar.ru/assets/images/kt/kt2022_skoda-octavia_001.jpg',
            'status': 'available'
        },
        {
            'brand': 'Hyundai',
            'model': 'Creta',
            'year': 2023,
            'price': 2100000,
            'mileage': 10000,
            'color': 'Оранжевый',
            'transmission': 'auto',
            'engine_capacity': 2.0,
            'fuel_type': 'petrol',
            'description': 'Полный привод, подогрев руля и сидений, камера заднего вида',
            'image_urls': 'https://www.allcarz.ru/wp-content/uploads/2020/03/foto-creta-2019_07.jpg',
            'status': 'available'
        },
        {
            'brand': 'Audi',
            'model': 'A4',
            'year': 2021,
            'price': 3200000,
            'mileage': 35000,
            'color': 'Серебристый',
            'transmission': 'auto',
            'engine_capacity': 2.0,
            'fuel_type': 'petrol',
            'description': 'Quattro полный привод, виртуальная приборная панель, LED фары',
            'image_urls': 'https://roadres.com/images/top/audi/a4-b9.jpg',
            'status': 'available'
        },
        {
            'brand': 'Citroen',
            'model': 'DS4',
            'year': 2017,
            'price': 1000000,
            'mileage': 100000,
            'color': 'Коричневый',
            'transmission': 'auto',
            'engine_capacity': 1.6,
            'fuel_type': 'petrol',
            'description': 'Стильный французский хэтчбек с оригинальным дизайном, комфортной подсветкой и экономичным двигателем. Отличный выбор для города и путешествий.',
            'image_urls': 'https://jfautomotive.co.uk/wp-content/uploads/2024/03/exterior_angle270-for-ds4-2.jpeg',
            'status': 'available'
        },
    ]
    
    print("🚗 СОЗДАНИЕ 9 ТЕСТОВЫХ АВТОМОБИЛЕЙ")
    print("=" * 60)
    
    created_count = 0
    for i, car_data in enumerate(cars_data, 1):
        try:
            car = Car.objects.create(**car_data)
            created_count += 1
            
            print(f"✅ {i}. {car.brand} {car.model} ({car.year})")
            print(f"   Цена: {car.price:,} руб. | Пробег: {car.mileage} км")
            print(f"   Цвет: {car.color} | Статус: {car.status}")
            print()
            
        except Exception as e:
            print(f"❌ Ошибка при создании {car_data['brand']} {car_data['model']}: {e}")
            print()
    
    print("=" * 60)
    print(f"🎉 УСПЕШНО СОЗДАНО: {created_count} автомобилей")
    
    print("\n📊 СТАТИСТИКА:")
    total_cars = Car.objects.count()
    print(f"   Всего автомобилей в БД: {total_cars}")
    
    by_brand = Car.objects.values('brand').annotate(count=Count('id')).order_by('-count')
    print(f"   По маркам:")
    for item in by_brand:
        print(f"     • {item['brand']}: {item['count']} авто")
    
    print("\n🌐 Проверь API: http://localhost:8000/api/cars/")

if __name__ == '__main__':
    create_default_cars()