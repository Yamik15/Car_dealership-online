import { useState, useEffect } from 'react';
import './AccountInfo.css';

export default function AccountInfo() {
  const [userData, setUserData] = useState({
    fullName: 'Иванов Иван Иванович',
    email: '12345@mail.com',
    phone: '+7 937 555 55 55',
  });
  
  const [orders, setOrders] = useState([
    {
      id: '0001',
      status: 'Доставлен',
      car: 'Citroen DS4, 1.6 150 AT',
      date: '25.01.2026',
      price: '1 000 000 ₽'
    },
    {
      id: '0002',
      status: 'На таможне',
      car: 'Volkswagen Golf R\n1.8 150 АМТ',
      date: '26.01.2026',
      price: '1 200 000 ₽'
    },
    {
      id: '0003',
      status: 'В обработке',
      car: 'BMW X5, 3.0 300 AT',
      date: '27.01.2026',
      price: '2 500 000 ₽'
    }
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Здесь можно добавить запрос к API для получения данных пользователя
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Пример запроса к API
      // const response = await fetch('http://localhost:8000/api/user/profile/');
      // const data = await response.json();
      // setUserData(data);
      
      // Для демонстрации используем setTimeout
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Ошибка при загрузке данных пользователя:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Доставлен': return '#4CAF50';
      case 'На таможне': return '#FF9800';
      case 'В обработке': return '#2196F3';
      default: return '#FFFFFF';
    }
  };

  if (loading) {
    return <div className="loading">Загрузка данных...</div>;
  }

  return (
    <section className="account-info-section">
      <h1 className="account-title">Личный кабинет</h1>
      
      <div className="account-content">
        <div className="user-info-section">
          <h2 className="section-title user-title">Ваши данные</h2>
          
          <div className="user-avatar">
            <div className="avatar-circle">
              <span className="avatar-initials">ИИ</span>
            </div>
          </div>
          
          <div className="user-data-fields">
            <div className="data-field">
              <div className="field-content">
                <span className="field-value">{userData.fullName}</span>
              </div>
            </div>
            
            <div className="data-field">
              <div className="field-content">
                <span className="field-value">{userData.email}</span>
              </div>
            </div>
            
            <div className="data-field">
              <div className="field-content">
                <span className="field-value">{userData.phone}</span>
              </div>
            </div>
          </div>
          
          <button className="logout-btn" onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </div>
        
        <div className="orders-section">
          <h2 className="section-title orders-title">Заказы</h2>
          
          <div className="orders-table">
            <div className="table-header">
              <div className="header-cell">Номер заказа</div>
              <div className="header-cell">Статус</div>
              <div className="header-cell">Автомобиль</div>
              <div className="header-cell">Дата</div>
              <div className="header-cell">Сумма</div>
            </div>
            
            <div className="table-body">
              {orders.map((order) => (
                <div key={order.id} className="table-row">
                  <div className="table-cell order-number">
                    <span className="order-prefix">№</span>
                    <span className="order-id">{order.id}</span>
                  </div>
                  <div className="table-cell order-status">
                    <span 
                      className="status-badge"
                      style={{ color: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="table-cell order-car">
                    {order.car.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                  <div className="table-cell order-date">{order.date}</div>
                  <div className="table-cell order-price">{order.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}