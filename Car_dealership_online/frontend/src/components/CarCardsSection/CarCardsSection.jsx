import { useState, useEffect } from 'react';
import './CarCardsSection.css';

export default function CarCardsSection() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const carsPerPage = 6;

  useEffect(() => {
    fetchCars();
  }, [currentPage]);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/api/cars/?page=${currentPage}`);
      const data = await response.json();
      
      if (data.results) {
        setCars(data.results);
        setTotalPages(Math.ceil(data.count / carsPerPage));
      } else {
        setCars(data);
      }
    } catch (error) {
      console.error('Ошибка при загрузке автомобилей:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCar = (carId) => {
    window.location.href = `/car/${carId}`;
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleShowMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  if (loading && cars.length === 0) {
    return <div className="loading">Загрузка автомобилей...</div>;
  }

  return (
    <section className="car-cards-section">
      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-card-image">
              <img 
                src={car.image_url ? `http://localhost:8000${car.image_url}` : '/car-placeholder.jpg'} 
                alt={`${car.brand} ${car.model}`}
              />
            </div>
            <h3 className="car-card-title">{car.brand} {car.model}, {car.year}</h3>
            <div className="car-card-specs">
              <p>Пробег: {car.mileage ? car.mileage.toLocaleString('ru-RU') + 'км' : 'Нет данных'}</p>
              <p>{car.engine || ''}{car.transmission ? ', ' + car.transmission : ''}</p>
              <p>{car.fuel_type || ''}</p>
            </div>
            <div className="car-card-price">
              Цена: {car.price ? car.price.toLocaleString('ru-RU') + ' ₽' : 'Цена не указана'}
            </div>
            <button 
              className="view-car-btn"
              onClick={() => handleViewCar(car.id)}
            >
              РАССМОТРЕТЬ
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
              onClick={() => handlePageClick(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
        {totalPages > 5 && (
          <>
            <span className="page-dots">...</span>
            <button
              className={`page-btn ${currentPage === totalPages ? 'active' : ''}`}
              onClick={() => handlePageClick(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
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