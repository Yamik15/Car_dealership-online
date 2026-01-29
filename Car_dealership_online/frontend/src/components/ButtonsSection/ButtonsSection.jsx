import './ButtonsSection.css'
import BigButton from '../BigButton/BigButton'

export default function ButtonsSection(){
    return(
        <div className="buttons-container">
            <BigButton
                icon="/icons/Dealers.svg"
                text="НАЙТИ ДИЛЕРА"
                description="200+ дилерских центра по России"
                className='button__left'
            />
            <BigButton
                icon="/icons/Test_drive.svg"
                text="ТЕСТ-ДРАЙВ"
                description="Моментальная заявка в любое удобное для вас время"
                className='button__right'
            />
        </div>
    )
}