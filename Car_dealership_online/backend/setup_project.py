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
        # Используем правильную кодировку для Windows
        if sys.platform == "win32":
            # Устанавливаем переменную окружения для UTF-8
            env = os.environ.copy()
            env['PYTHONIOENCODING'] = 'utf-8'
            
            result = subprocess.run(
                command, 
                shell=True, 
                check=True, 
                capture_output=True, 
                text=True,
                encoding='utf-8',
                errors='replace',  # Заменяет некорректные символы
                env=env
            )
        else:
            # Для Linux/Mac оставляем как было
            result = subprocess.run(
                command, 
                shell=True, 
                check=True, 
                capture_output=True, 
                text=True
            )
        
        print(f"✅ Успешно!")
        if result.stdout:
            # Безопасно выводим первые 200 символов
            safe_output = result.stdout[:200]
            if len(result.stdout) > 200:
                safe_output += "..."
            print(f"Вывод: {safe_output}")
    except subprocess.CalledProcessError as e:
        print(f"❌ Ошибка выполнения команды (код: {e.returncode})")
        if e.stderr:
            # Безопасно обрабатываем stderr
            try:
                error_msg = e.stderr[:500]
                print(f"Сообщение об ошибке: {error_msg}")
            except:
                print("Не удалось прочитать сообщение об ошибке (проблема с кодировкой)")
        return False
    except Exception as e:
        print(f"❌ Неожиданная ошибка: {type(e).__name__}: {e}")
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
        # Для команды createsu используем специальную обработку
        print("\n" + "="*60)
        print("🚀 Создание суперпользователя")
        print("="*60)
        print("Команда: python manage.py createsu")
        
        try:
            # Запускаем createsu как отдельный процесс с явной кодировкой
            if sys.platform == "win32":
                # Для Windows явно указываем UTF-8
                process = subprocess.Popen(
                    'python manage.py createsu',
                    shell=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    encoding='utf-8',
                    errors='replace'
                )
                stdout, stderr = process.communicate()
                
                if process.returncode == 0:
                    if stdout:
                        print(f"{stdout[:200]}...")
                else:
                    print(f"❌ Ошибка при создании суперпользователя")
                    if stderr:
                        print(f"Детали: {stderr[:500]}")
            else:
                # Для Linux/Mac используем обычный подход
                result = subprocess.run(
                    'python manage.py createsu',
                    shell=True,
                    check=True,
                    capture_output=True,
                    text=True
                )
                print("✅ Суперпользователь создан!")
                if result.stdout:
                    print(f"Вывод: {result.stdout[:200]}...")
                    
        except Exception as e:
            print(f"❌ Ошибка при создании суперпользователя: {e}")
    
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
        try:
            # Запускаем сервер
            os.system("python manage.py runserver")
        except KeyboardInterrupt:
            # Обрабатываем нажатие Ctrl+C
            print("\n" + "="*60)
            print("👋 СЕРВЕР ОСТАНОВЛЕН ПОЛЬЗОВАТЕЛЕМ")
            print("="*60)
            print("Проект успешно настроен и готов к работе!")
            print("Для повторного запуска сервера выполните:")
            print("  python manage.py runserver")
        except Exception as e:
            print(f"\n❌ Ошибка при работе сервера: {e}")

if __name__ == "__main__":
    setup_project()