import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SimilarCarsSection.css';

export default function SimilarCarsSection({ currentCarId }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSimilarCars();
  }, [currentCarId]);

  const fetchSimilarCars = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/cars/');
      const data = await response.json();
      const filtered = data
        .filter(car => car.id !== currentCarId)
        .slice(0, 3);
      setCars(filtered);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCar = (carId) => {
    navigate(`/car/${carId}`);
  };

  const handleShowMore = () => {
    navigate('/catalog');
  };

  if (loading) {
    return <div className="loading">Загрузка похожих автомобилей...</div>;
  }

  return (
    <section className="similar-cars-section">
      <h2 className="similar-title">Популярные в разделе</h2>
      
      <div className="similar-cars-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-card-image">
              <img 
                src={car.image_url ? `http://localhost:8000${car.image_url}` : '/car-placeholder.jpg'} 
                alt={`${car.brand} ${car.model}`}
              />
            </div>
            <h3 className="car-card-title">{car.brand} {car.model}, {car.year}</h3>
            <div className="car-card-specs">
              <p>Пробег: {car.mileage.toLocaleString('ru-RU')}км</p>
              <p>{car.engine}, {car.transmission}</p>
              <p>{car.fuel_type}</p>
            </div>
            <div className="car-card-price">Цена: {car.price.toLocaleString('ru-RU')} ₽</div>
            <button 
              className="view-car-btn"
              onClick={() => handleViewCar(car.id)}
            >
              РАССМОТРЕТЬ
            </button>
          </div>
        ))}
      </div>
      
      <button 
        className="show-more-btn"
        onClick={handleShowMore}
      >
        ПОКАЗАТЬ ЕЩЁ
      </button>
    </section>
  );
}