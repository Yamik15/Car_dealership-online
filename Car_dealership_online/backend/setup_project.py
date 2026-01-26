#!/usr/bin/env python
"""
Скрипт для полной настройки проекта
"""

import os
import sys
import subprocess

def run_command(command, description):
    """Запускает команду и выводит результат"""
    print(f"\n{'='*60}")
    print(f"🚀 {description}")
    print(f"{'='*60}")
    print(f"Команда: {command}")
    
    try:
        result = subprocess.run(command, shell=True, check=True, 
                              capture_output=True, text=True)
        print(f"✅ Успешно!")
        if result.stdout:
            print(f"Вывод: {result.stdout[:200]}...")
    except subprocess.CalledProcessError as e:
        print(f"❌ Ошибка: {e}")
        print(f"Stderr: {e.stderr}")
        return False
    return True

def setup_project():
    """Настраивает проект с нуля"""
    
    print("🛠️  ПОЛНАЯ НАСТРОЙКА ПРОЕКТА CAR DEALERSHIP")
    print("="*60)
    
    # 1. Миграции
    if not run_command("python manage.py makemigrations", "Создание миграций"):
        return
    
    if not run_command("python manage.py migrate", "Применение миграций"):
        return
    
    # 2. Создание суперпользователя (если нужно)
    create_superuser = input("\nСоздать суперпользователя для админки? (y/n): ")
    if create_superuser.lower() == 'y':
        run_command("python manage.py createsu", "Создание суперпользователя")
    
    # 3. Сидинг данных
    print("\n" + "="*60)
    print("📊 ЗАПОЛНЕНИЕ БАЗЫ ДАННЫХ")
    print("="*60)
    
    seed_choice = input("Заполнить БД тестовыми данными? (9 машин, 4 пользователя) (y/n): ")
    if seed_choice.lower() == 'y':
        # Запускаем seed_all напрямую
        print("\nЗапуск заполнения БД...")
        try:
            import seed_all
            seed_all.seed_database()
        except Exception as e:
            print(f"❌ Ошибка при заполнении БД: {e}")
    
    # 4. Запуск сервера
    print("\n" + "="*60)
    print("🎉 НАСТРОЙКА ЗАВЕРШЕНА!")
    print("="*60)
    print("\n🌐 ДОСТУПНЫЕ АДРЕСА:")
    print("   • Админка:     http://localhost:8000/admin/")
    print("   • API Users:   http://localhost:8000/api/users/")
    print("   • API Cars:    http://localhost:8000/api/cars/")
    print("   • API Orders:  http://localhost:8000/api/orders/")
    
    run_server = input("\nЗапустить сервер сейчас? (y/n): ")
    if run_server.lower() == 'y':
        print("\n" + "="*60)
        print("🚀 ЗАПУСК СЕРВЕРА...")
        print("="*60)
        print("Сервер запущен: http://localhost:8000")
        print("Остановка: Ctrl+C")
        os.system("python manage.py runserver")

if __name__ == "__main__":
    setup_project()