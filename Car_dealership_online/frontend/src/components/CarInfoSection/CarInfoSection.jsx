import './CarInfoSection.css';

export default function CarInfoSection({ car }) {
  return (
    <section className="car-info-section">
      <h1 className="car-title">
        {car.brand} {car.model}, {car.year}
      </h1>
      <div className="car-main-price">{car.price.toLocaleString('ru-RU')} ₽</div>
      
      <div className="car-main-image">
        <img 
          src={car.image_url ? `http://localhost:8000${car.image_url}` : '/car-placeholder.jpg'} 
          alt={`${car.brand} ${car.model}`}
        />
      </div>
      
      <div className="specs-equipment-container">
        <div className="specs-column">
          <h2 className="section-title">ХАРАКТЕРИСТИКИ</h2>
          <div className="specs-content">
            <div className="specs-left">
              <p>Марка</p>
              <p>Модель</p>
              <p>Год выпуска</p>
              <p>Цена</p>
              <p>Пробег</p>
              <p>Цвет</p>
              <p>КП</p>
              <p>Двигатель</p>
              <p>Топливо</p>
              <p>Описание</p>
            </div>
            <div className="specs-right">
              <p>{car.brand}</p>
              <p>{car.model}</p>
              <p>{car.year}</p>
              <p>{car.price.toLocaleString('ru-RU')} рублей</p>
              <p>{car.mileage.toLocaleString('ru-RU')} км</p>
              <p>{car.color}</p>
              <p>{car.transmission}</p>
              <p>{car.engine}</p>
              <p>{car.fuel_type}</p>
              <p className="description">{car.description}</p>
            </div>
          </div>
        </div>
        
        <div className="equipment-column">
          <h2 className="section-title">КОМПЛЕКТАЦИЯ</h2>
          <div className="equipment-content">
            <div className="equipment-left">
              <p>Название</p>
              <p>Безопасность и управление</p>
              <p>Комфорт и удобство</p>
              <p>Стиль и свет</p>
            </div>
            <div className="equipment-right">
              <p>{car.equipment_name || 'Sport Chic'}</p>
              <p>{car.equipment_safety || 'ABS, ESP, подушки безопасности (фронтальные, боковые, шторки), ISOFIX, активный усилитель руля, круиз-контроль, датчики парковки, дождя, света.'}</p>
              <p>{car.equipment_comfort || 'Кожаный салон, отделка кожей рычага КПП, рулевого колеса, 2-зонный климат-контроль, бортовой компьютер, регулировка руля в 2-х плоскостях, электростеклоподъемники, электрозеркала с функцией складывания, охлаждаемый перчаточный ящик.'}</p>
              <p>{car.equipment_style || 'Передние и задние противотуманные фары, ксеноновые фары, мультифункциональное рулевое колесо.'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}