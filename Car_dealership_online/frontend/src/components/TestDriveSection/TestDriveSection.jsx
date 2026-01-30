import './TestDriveSection.css'
import FormForSelection from '../FormForSelection/FormForSelection'
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';

export default function TestDriveSection(){
    const [automobil, setAutomobil] = useState('')
    const [city, setCity] = useState('')
    const [dealer, setDealer] = useState('')
    const [gender, setGender] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const automobils = [
        { value: 'Citroen ds4', label: 'Citroen DS4' },
        { value: 'a4', label: 'A4' },
        { value: 'c-class', label: 'C-Class' },
        { value: 'camry', label: 'Camry' },
    ]
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
    const genders = [
        { value: 'м', label: 'м' },
        { value: 'ж', label: 'ж' },
    ]
    return(
        <div className="testdrive-container">
            <div className="title">
                <h2>Тест-драйв</h2>
            </div>
            <div className="columns">
                <div className="column column__automobile">
                    <div className="column__title">
                        <p>Автомобиль</p>
                    </div>
                    <FormForSelection
                        placeholder="Автомобиль"
                        options={automobils}
                        value={automobil}
                        onChange={setAutomobil}
                    />
                    <div className="auto-image">
                        <img src="./images/WhiteCitroen.png" alt="" />
                    </div>
                    <a href="#">Перейти на страницу автомобиля</a>
                </div>
                <div className="column column__dealer">
                    <div className="column__title">
                        <p>Дилер</p>
                    </div>
                    <div className="column__forms">
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
                    <a href="#">Показать на карте</a>
                </div>
                <div className="column column__data">
                    <div className="column__title">
                        <p>Ваши данные</p>
                    </div>
                    <div className="column__forms">
                        <FormForSelection
                            placeholder="Пол"
                            options={genders}
                            value={gender}
                            onChange={setGender}
                        />
                        <FormInput
                            placeholder="ФИО"
                            value={name}
                            onChange={setName}
                            type="text"
                        />
                        <FormInput
                            placeholder="Email"
                            value={email}
                            onChange={setEmail}
                            type="text"
                        />
                        <FormInput
                            placeholder="Телефон"
                            value={phone}
                            onChange={setPhone}
                            type="number"
                        />
                    </div>
                    <div className="personal-data">
                        <CheckBox 
                            defaultChecked={true}
                            label = "Согласие на обработку персональных данных"
                        />
                    </div>
                    <div className="column__button">
                        <Button>Оставить заявку</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}