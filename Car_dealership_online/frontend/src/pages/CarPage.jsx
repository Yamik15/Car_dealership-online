import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarPage.css';
import Header from '../components/Header/Header';
import CarInfoSection from '../components/CarInfoSection/CarInfoSection';
import ApplicationSection from '../components/ApplicationSection/ApplicationSection';
import SimilarCarsSection from '../components/SimilarCarsSection/SimilarCarsSection';
import ButtonsSection from '../components/ButtonsSection/ButtonsSection'
import Footer from '../components/Footer/Footer';


export default function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarData();
  }, [id]);

  const fetchCarData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/cars/${id}/`);
      const data = await response.json();
      setCar(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplicationSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/api/applications/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          car: id,
          created_at: new Date().toISOString()
        }),
      });

      if (response.ok) {
        alert('Заявка успешно отправлена!');
        return true;
      } else {
        alert('Ошибка при отправке заявки');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ошибка при отправке заявки');
      return false;
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Загрузка...</p>
      </div>
    );
  }

  if (!car) {
    return <div className="error">Автомобиль не найден</div>;
  }

  return (
    <div className="car-detail-page">
      <Header />
      
      <main className="car-detail-content">
        <CarInfoSection car={car} />
        
        <ApplicationSection 
          carId={id}
          onSubmit={handleApplicationSubmit}
        />
        
        <SimilarCarsSection currentCarId={id} />
        
        <ButtonsSection />
      </main>
      
      <Footer />
    </div>
  );
}