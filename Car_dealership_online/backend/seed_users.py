import os
import sys

# Настройка Django - должна быть ПЕРВОЙ!
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Car_dealership_online.settings')

import django
django.setup()

from users.models import User

def create_default_users():
    """Создаёт 4 тестовых пользователя (с твоей моделью)"""
    
    users_data = [
        # 1. Роман
        {
            'email': 'roman@gmail.com',
            'password': '1234',
            'phone': '+78005553535'
        },
        # 2. Кирилл
        {
            'email': 'kirill@gmail.com',
            'password': '1234',
            'phone': '+78005553536'
        },
        # 3. Аня
        {
            'email': 'anya@gmail.com',
            'password': '1234',
            'phone': '+78005553537'
        },
        # 4. Федор
        {
            'email': 'fedor@gmail.com',
            'password': '1234',
            'phone': '+78005553538'
        },
    ]
    
    print("👤 СОЗДАНИЕ ТЕСТОВЫХ ПОЛЬЗОВАТЕЛЕЙ")
    print("=" * 60)
    print("ℹ️  Используется PBKDF2 хеширование с солью")
    print("=" * 60)
    
    created_count = 0
    for i, user_data in enumerate(users_data, 1):
        try:
            # Создаем пользователя
            user = User(
                email=user_data['email'],
                phone=user_data['phone']
            )
            
            # Устанавливаем пароль (автоматически хешируется в save())
            user.password_hash = user_data['password']  # Сырой пароль
            user.save()  # В save() автоматически вызовется set_password()
            
            created_count += 1
            
            print(f"✅ {i}. {user.email}")
            print(f"   Телефон: {user.phone}")
            print(f"   ID: {user.id}")
            print(f"   Хеш пароля: {user.password_hash[:50]}...")
            print()
            
        except Exception as e:
            print(f"❌ Ошибка при создании {user_data['email']}: {e}")
            print()
    
    print("=" * 60)
    print(f"🎉 УСПЕШНО СОЗДАНО: {created_count} пользователей")
    
    # Проверка работы
    print("\n🔐 ПРОВЕРКА ХЕШИРОВАНИЯ:")
    print("=" * 60)
    
    try:
        test_user = User.objects.get(email='roman@gmail.com')
        print(f"Пользователь: {test_user.email}")
        print(f"Проверка пароля '1234': {test_user.check_password('1234')}")  # Должно быть True
        print(f"Проверка пароля 'wrong': {test_user.check_password('wrong')}")  # Должно быть False
        print(f"Формат хеша: {test_user.password_hash.split('$')[0]}")
        print(f"Итерации: {test_user.password_hash.split('$')[1]}")
        print(f"Длина хеша: {len(test_user.password_hash)} символов")
    except Exception as e:
        print(f"Ошибка при проверке: {e}")
    
    print("\n🌐 Проверь API: http://localhost:8000/api/users/")

if __name__ == '__main__':
    create_default_users()