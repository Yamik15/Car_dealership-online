import { useState, useEffect } from 'react';
import './AccountInfo.css';

export default function AccountInfo() {
  const [userData] = useState({
    fullName: 'Иванов Иван Иванович',
    email: '12345@mail.com',
    phone: '+7 937 555 55 55',
  });
  
  const [orders] = useState([
    {
      id: '0001',
      status: 'Доставлен',
      car: 'Citroen DS4, 1.6 150 AT',
    },
    {
      id: '0002',
      status: 'На таможне',
      car: 'Volkswagen Golf R\n1.8 150 АМТ',
    }
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
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

  const handleCatalog = () => {
    window.location.href = '/catalog';
  };

  const handleCall = () => {
    window.location.href = 'tel:+79378835040';
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
      <div className="main-content">
        <h1 className="account-title">Личный кабинет</h1>
        
        <div className="user-info-section">
          <h2 className="user-title">Ваши данные</h2>
          
          <div className="user-content">
            <div className="user-avatar-container">
              <div className="user-avatar">
                <div className="avatar-circle">
                  <span className="avatar-initials">ИИ</span>
                </div>
              </div>
              <button className="logout-btn" onClick={handleLogout}>
                Выйти из аккаунта
              </button>
            </div>
            
            <div className="user-data-container">
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
            </div>
          </div>
        </div>
        
        <div className="orders-section">
          <h2 className="orders-title">Заказы</h2>
          
          <div className="orders-table-container">
            <div className="orders-table">
              <div className="table-divider divider-1"></div>
              <div className="table-divider divider-2"></div>
              <div className="vertical-divider-1"></div>
              <div className="vertical-divider-2"></div>
              
              <div className="table-headers">
                <div className="header-cell header-order">Номер заказа</div>
                <div className="header-cell header-status">Статус</div>
                <div className="header-cell header-car">Автомобиль</div>
              </div>
              
              <div className="table-rows">
                <div className="order-row">
                  <div className="order-cell order-number">№{orders[0].id}</div>
                  <div className="order-cell order-status" style={{ color: getStatusColor(orders[0].status) }}>
                    {orders[0].status}
                  </div>
                  <div className="order-cell order-car">{orders[0].car}</div>
                </div>
        
                <div className="order-row">
                  <div className="order-cell order-number">№{orders[1].id}</div>
                  <div className="order-cell order-status" style={{ color: getStatusColor(orders[1].status) }}>
                    {orders[1].status}
                  </div>
                  <div className="order-cell order-car">
                    {orders[1].car.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}