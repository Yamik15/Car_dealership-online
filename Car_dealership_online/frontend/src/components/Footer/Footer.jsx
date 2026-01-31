import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-content-column__first">
                    <h1>MotorHouse</h1>
                    <p>© MOTORHOUSE(© 2026, IT Males) Все права защищены.</p>
                </div>
                <div className="footer-content-column">
                    <a href="#" className='footer-link'>Акции</a>
                    <a href="#" className='footer-link'>Страхование</a>
                    <a href="#" className='footer-link'>Кредитование</a>
                    <a href="#" className='footer-link'>Гарантия</a>
                    <a href="#" className='footer-link'>Корпоративным клиентам</a>
                </div>
                <div className="footer-content-column text-right">
                    <p>Тел: 89378835040</p>
                    <p>Адрес: ул. Северный Венец, 32</p>
                    <p>Время работы: Пн-Пт 09:00-20:00</p>
                    <p>Доставляем по всей России</p>
                    <p>Работаем по всему миру</p>
                </div>
            </div>
        </footer>
    )
}