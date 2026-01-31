import './DreamDeliverySection.css'

export default function DreamDeliverySection(){
    return(
        <div className="container">
            <div className="dream-delivery">
                <div className="dream-delivery__content">
                    <h2>ПРИВЕЗЁМ ВАШУ МЕЧТУ <br/>ПРЯМО В ВАШ ДОМ!</h2>
                    <ul className="benefits">
                        <li>— Работаем более 10 лет</li>
                        <li>— Доставка от 5 дней</li>
                        <li>— Выберем под вас, с выгодным<br/> утилём</li>
                    </ul>
                </div>
                <div className="dream-delivery__image">
                    <img src="./images/Blue_Mercedes-Benz.png" alt="" />
                </div>
            </div>
        </div>
    )
}