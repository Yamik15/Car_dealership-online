from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError

class Command(BaseCommand):
    help = 'Создаёт суперпользователя Django для админки'
    
    def add_arguments(self, parser):
        parser.add_argument(
            '--username',
            default='admin',
            help='Имя суперпользователя (по умолчанию: admin)'
        )
        parser.add_argument(
            '--email',
            default='admin@carsalon.com',
            help='Email суперпользователя'
        )
        parser.add_argument(
            '--password',
            default='1234',
            help='Пароль суперпользователя (по умолчанию: 1234)'
        )

    def handle(self, *args, **options):
        # Используем стандартную модель User Django
        User = get_user_model()  # Это django.contrib.auth.models.User
        
        username = options['username']
        email = options['email']
        password = options['password']
        
        try:
            # Проверяем, существует ли уже суперпользователь
            if not User.objects.filter(username=username).exists():
                # Создаём СУПЕРПОЛЬЗОВАТЕЛЯ Django
                User.objects.create_superuser(
                    username=username,
                    email=email,
                    password=password
                )
                
                self.stdout.write(
                    self.style.SUCCESS('✅ Суперпользователь Django успешно создан!')
                )
                self.stdout.write('=' * 50)
                self.stdout.write(f'👤 Имя пользователя: {username}')
                self.stdout.write(f'📧 Email: {email}')
                self.stdout.write(f'🔑 Пароль: {password}')
                self.stdout.write('=' * 50)
                self.stdout.write('')
                self.stdout.write('🌐 Доступ к админке: http://localhost:8000/admin/')
            else:
                self.stdout.write(
                    self.style.WARNING(f'⚠️ Суперпользователь {username} уже существует')
                )
                self.stdout.write('ℹ️  Попробуйте другой username:')
                self.stdout.write('    python manage.py createsu --username=admin2')
                
        except IntegrityError as e:
            self.stdout.write(
                self.style.ERROR(f'❌ Ошибка при создании: {e}')
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'❌ Неизвестная ошибка: {e}')
            )