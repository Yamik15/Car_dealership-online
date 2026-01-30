import './DealerSearch.css'
import FormForSelection from '../FormForSelection/FormForSelection'
import { useState } from 'react';

export default function DealerSearch(){
    const [city, setCity] = useState('')
    const [dealer, setDealer] = useState('')
    const cities = [
        { value: 'moscow', label: 'Москва' },
        { value: 'spb', label: 'Санкт-Петербург' },
        { value: 'ekb', label: 'Екатеринбург' },
        { value: 'kazan', label: 'Казань' },
    ]
    const dealers = [
        { value: 'a', label: 'a' },
        { value: 's', label: 's' },
        { value: 'z', label: 'z' },
        { value: 'k', label: 'К' },
    ]
    return(
        <div className="dealer-container">
            <div className="title">
                <h2>Поиск дилера</h2>
            </div>
            <div className="wrapper">
                <div className="content">
                    <div className="name"><p>Дилер</p></div>
                    <div className="forms">
                        <FormForSelection
                            placeholder="Ваш город"
                            options={cities}
                            value={city}
                            onChange={setCity}
                        />
                        <FormForSelection
                            placeholder="Выберите дилера"
                            options={dealers}
                            value={dealer}
                            onChange={setDealer}
                        />
                    </div>
                    <div className="services">
                        <p>Выберите услугу</p>
                        <div className="services__list">
                            <div className="services-item">
                                <img src="./icons/Calculation.svg" alt=""/>
                                <p>Рассчёт <br/>ТО</p>
                            </div>
                            <div className="services-item">
                                <img src="./icons/Service.svg" alt=""/>
                                <p>Запись <br/>на сервис</p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts">
                        <a href="#">8 (846) 211-12-79</a>
                        <p>Московское ш., 264А, Самара,</p>
                        <p>Самарская обл., 443125</p>
                        <a href="#">Ссылка на сайт дилера</a>
                    </div>
                </div>
                <div className="dealers-map">
                    <iframe 
                        src="https://yandex.ru/map-widget/v1/?ll=50.193977%2C53.217241&z=15&l=map&pt=50.193977%2C53.217241%2Cpm2rdm"
                        width="100%"
                        height="100%"
                        style={{ 
                        border: 'none'
                        }}
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}