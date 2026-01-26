import os
import sys

# Настройка Django - должна быть ПЕРВОЙ!
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Car_dealership_online.settings')

import django
django.setup()

def seed_database():
    """Заполняет БД всеми тестовыми данными"""
    
    print("🌱 ЗАПОЛНЕНИЕ БАЗЫ ДАННЫХ ТЕСТОВЫМИ ДАННЫМИ")
    print("=" * 60)
    
    try:
        # 1. Пользователи
        print("\n1. СОЗДАНИЕ ПОЛЬЗОВАТЕЛЕЙ...")
        from seed_users import create_default_users
        create_default_users()
        
        # 2. Автомобили
        print("\n2. СОЗДАНИЕ АВТОМОБИЛЕЙ...")
        from seed_cars import create_default_cars
        create_default_cars()
        
        print("\n" + "=" * 60)
        print("✅ БАЗА ДАННЫХ УСПЕШНО ЗАПОЛНЕНА!")
        print("\n🌐 ДОСТУПНЫЕ ENDPOINTS:")
        print("   • http://localhost:8000/api/users/")
        print("   • http://localhost:8000/api/cars/")
        print("   • http://localhost:8000/api/orders/")
        print("   • http://localhost:8000/admin/")
        
    except ImportError as e:
        print(f"❌ Ошибка импорта: {e}")
        print("Убедись, что файлы seed_users.py и seed_cars.py в той же папке")

if __name__ == '__main__':
    seed_database()