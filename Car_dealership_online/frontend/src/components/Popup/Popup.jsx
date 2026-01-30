import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = React.useState(initialMode);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  React.useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setFormData({ name: '', email: '', password: '' });
    }
  }, [isOpen, initialMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} submitted:`, formData);
  };

  const switchToRegister = () => setMode('register');
  const switchToLogin = () => setMode('login');

  if (!isOpen) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
      </div>
    </div>
  );
}

  return (
    <div className={`popup-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="popup-close" 
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        {mode === 'login' ? (
          <h2 className="popup-title">Добро пожаловать в MotorHouse</h2>
        ) : (
          <h2 className="popup-title">Зарегистрируйтесь для личного кабинета</h2>
        )}
        
        <form onSubmit={handleSubmit} className="popup-form">
          {mode === 'register' && (
            <div className="popup-form-group">
              <label htmlFor="popup-name">Имя</label>
              <input
                type="text"
                id="popup-name"
                name="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          
          <div className="popup-form-group">
            <label htmlFor="popup-email">
              {mode === 'login' ? 'Имя' : 'Придумайте пароль'}
            </label>
            <input
              type="email"
              id="popup-email"
              name="email"
              placeholder="Введите ваш пароль"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="popup-form-group">
            <label htmlFor="popup-password">Ваш E-mail</label>
            <input
              type="password"
              id="popup-password"
              name="password"
              placeholder="Введите ваш E-mail"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          {mode === 'login' && (
            <div className="popup-forgot">
              <a href="#" className="popup-forgot-link">Забыли пароль?</a>
            </div>
          )}
          
          <button type="submit" className="popup-submit">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
          
          <div className="popup-switch">
            {mode === 'login' ? (
              <>
                <span className="popup-switch-text">или</span>
                <button 
                  type="button" 
                  className="popup-switch-btn"
                  onClick={switchToRegister}
                >
                  Зарегистрируйтесь
                </button>
              </>
            ) : (
              <>
                <span className="popup-switch-text">Уже есть аккаунт?</span>
                <button 
                  type="button" 
                  className="popup-switch-btn"
                  onClick={switchToLogin}
                >
                  Войти
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;