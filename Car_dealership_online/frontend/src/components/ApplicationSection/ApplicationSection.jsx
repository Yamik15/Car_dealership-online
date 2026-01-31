import { useState } from 'react';
import './ApplicationSection.css';

export default function ApplicationSection({ carId, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert('Заполните все поля');
      return;
    }

    if (!formData.consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    const success = await onSubmit({
      client_name: formData.name,
      client_phone: formData.phone,
      car: carId,
      status: 'new',
    });

    if (success) {
      setFormData({ name: '', phone: '', consent: false });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section className="application-section">
      <h2 className="application-title">
        Оставьте заявку по этому автомобилю,<br />
        и мы вам перезвоним!
      </h2>
      
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-inputs">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className="name-input"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="phone-input"
            required
          />
          <button type="submit" className="submit-btn">
            Оставить заявку
          </button>
        </div>
        
        <div className="consent-container">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="consent-checkbox"
            required
          />
          <label htmlFor="consent" className="consent-label">
            Согласие на обработку персональных данных
          </label>
        </div>
      </form>
    </section>
  );
}