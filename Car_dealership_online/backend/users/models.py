from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password, check_password
import hashlib
import secrets

class User(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    password_hash = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.email
    
    def set_password(self, raw_password):
        """
        Хеширует пароль и сохраняет хеш в password_hash
        """
        # Генерируем соль
        salt = secrets.token_hex(16)  # 16 байт = 32 hex символа
        
        # Создаём хеш: алгоритм + соль + пароль
        # Используем PBKDF2 (более безопасный, чем SHA256 напрямую)
        iterations = 100000  # Количество итераций (чем больше, тем безопаснее, но медленнее)
        
        # Хешируем с помощью PBKDF2
        password_hash = hashlib.pbkdf2_hmac(
            'sha256',
            raw_password.encode('utf-8'),
            salt.encode('utf-8'),
            iterations
        ).hex()
        
        # Сохраняем в формате: algorithm$iterations$salt$hash
        self.password_hash = f"pbkdf2_sha256${iterations}${salt}${password_hash}"
    
    def check_password(self, raw_password):
        """
        Проверяет, соответствует ли raw_password сохранённому хешу
        """
        try:
            # Разбираем сохранённый хеш
            parts = self.password_hash.split('$')
            if len(parts) != 4:
                return False
                
            algorithm, iterations_str, salt, stored_hash = parts
            
            # Проверяем алгоритм
            if algorithm != 'pbkdf2_sha256':
                return False
                
            # Конвертируем итерации в число
            iterations = int(iterations_str)
            
            # Вычисляем хеш для предоставленного пароля
            computed_hash = hashlib.pbkdf2_hmac(
                'sha256',
                raw_password.encode('utf-8'),
                salt.encode('utf-8'),
                iterations
            ).hex()
            
            # Сравниваем хеши безопасно (timing attack safe)
            return secrets.compare_digest(computed_hash, stored_hash)
            
        except (ValueError, AttributeError):
            return False
    
    def save(self, *args, **kwargs):
        """
        Переопределяем save для хеширования пароля перед сохранением
        """
        # Если пароль был изменен (ещё не хеширован)
        if self.password_hash and not self.password_hash.startswith('pbkdf2_sha256$'):
            # Временно сохраняем пароль
            raw_password = self.password_hash
            # Хешируем и сохраняем
            self.set_password(raw_password)
        
        super().save(*args, **kwargs)