import FormForSelection from '../FormForSelection/FormForSelection'
import './FormSection.css'
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';
import Button from '../Button/Button'

export default function FormSection(){
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [city, setCity] = useState('')
    const [year, setYear] = useState('')
    const brands = [
        { value: 'bmw', label: 'BMW' },
        { value: 'audi', label: 'Audi' },
        { value: 'mercedes', label: 'Mercedes-Benz' },
        { value: 'toyota', label: 'Toyota' },
    ]
    const models = [
        { value: 'x5', label: 'X5' },
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
    const years = Array.from({length: 30}, (_, i) => {
     const year = new Date().getFullYear() - i;
     return { value: year.toString(), label: year.toString() };
    })
    const [price, setPrice] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    return(
        <div className="form-section__container">
            <div className="title">
                <p>Заполните эту форму, чтобы мы уже <br/> привезли ваш автомобиль к выходным!</p>
            </div>
            <div className="form-section__content">
                <div className="form-section__forms">
                    <FormForSelection
                        placeholder="Марка"
                        options={brands}
                        value={brand}
                        onChange={setBrand}
                    />
                    <FormForSelection
                        placeholder="Модель"
                        options={models}
                        value={model}
                        onChange={setModel}
                    />
                    <FormForSelection
                        placeholder="Ваш город"
                        options={cities}
                        value={city}
                        onChange={setCity}
                    />
                </div>
                <div className="form-section__forms">
                    <FormInput
                        placeholder="Цена, до"
                        value={price}
                        onChange={setPrice}
                        type="number"
                        error={price && parseInt(price) < 1}
                        className="price-input"
                    />
                    <div className="two-forms">
                        <FormForSelection
                            placeholder="Год, от"
                            options={years}
                            value={year}
                            onChange={setYear}
                        />
                        <FormForSelection
                            placeholder="Год, до"
                            options={years}
                            value={year}
                            onChange={setYear}
                        />
                    </div>
                    <div className="two-forms">
                        <FormInput
                            placeholder="Улица"
                            value={street}
                            onChange={setStreet}
                            type="text"
                        />
                        <FormInput
                            placeholder="Дом"
                            value={house}
                            onChange={setHouse}
                            type="number"
                        />
                    </div>
                </div>
                <div className="form-section__button">
                    <Button className="form-section-button">Показать автомобили</Button>
                </div>
            </div>
        </div>
    )
}