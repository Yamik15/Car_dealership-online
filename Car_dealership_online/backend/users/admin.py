from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'phone', 'created_at', 'updated_at')
    list_display_links = ('id', 'email')
    search_fields = ('email', 'phone')
    list_filter = ('created_at',)
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Основная информация', {
            'fields': ('email', 'phone')
        }),
        ('Безопасность', {
            'fields': ('password_hash',)
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at')
        }),
    )