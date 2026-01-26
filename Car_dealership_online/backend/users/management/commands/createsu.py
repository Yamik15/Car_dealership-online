# createsu.py
import os
import sys
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError

class Command(BaseCommand):
    help = 'Создаёт суперпользователя Django для админки'
    
    def safe_print(self, message, style=None):
        """Безопасный вывод с заменой Unicode символов"""
        try:
            if style:
                self.stdout.write(style(message))
            else:
                self.stdout.write(message)
        except UnicodeEncodeError:
            # Заменяем эмодзи на текстовые аналоги
            safe_msg = message
            replacements = {
                '✅': '[OK]',
                '❌': '[ERROR]',
                '⚠️': '[WARNING]',
                '👤': '[USER]',
                '📧': '[EMAIL]',
                '🔑': '[PASSWORD]',
                '🌐': '[WEB]',
                'ℹ️': '[INFO]'
            }
            for emoji, text in replacements.items():
                safe_msg = safe_msg.replace(emoji, text)
            
            if style:
                self.stdout.write(style(safe_msg))
            else:
                self.stdout.write(safe_msg)
    
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
                
                self.safe_print('✅ Суперпользователь Django успешно создан!', 
                               self.style.SUCCESS)
                self.stdout.write('=' * 50)
                self.stdout.write(f'👤 Имя пользователя: {username}')
                self.stdout.write(f'📧 Email: {email}')
                self.stdout.write(f'🔑 Пароль: {password}')
                self.stdout.write('=' * 50)
                self.stdout.write('')
                self.stdout.write('🌐 Доступ к админке: http://localhost:8000/admin/')
            else:
                self.safe_print(f'⚠️ Суперпользователь {username} уже существует',
                               self.style.WARNING)
                self.stdout.write('ℹ️  Попробуйте другой username:')
                self.stdout.write('    python manage.py createsu --username=admin2')
                
        except IntegrityError as e:
            self.safe_print(f'❌ Ошибка при создании: {e}', self.style.ERROR)
        except Exception as e:
            self.safe_print(f'❌ Неизвестная ошибка: {e}', self.style.ERROR)