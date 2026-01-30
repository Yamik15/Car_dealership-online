from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        """Кастомный endpoint для отмены заказа"""
        order = self.get_object()
        order.status = 'cancelled'
        order.save()
        return Response({'status': 'Заказ отменён'})
    
    @action(detail=True, methods=['post'])
    def complete(self, request, pk=None):
        """Кастомный endpoint для завершения заказа"""
        order = self.get_object()
        order.status = 'delivered'
        order.save()
        return Response({'status': 'Заказ доставлен'})