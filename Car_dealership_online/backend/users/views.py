from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    ViewSet для пользователей.
    Автоматически создаёт endpoints:
    GET /api/users/ - список
    POST /api/users/ - создать
    GET /api/users/{id}/ - детали
    PUT /api/users/{id}/ - обновить
    DELETE /api/users/{id}/ - удалить
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer