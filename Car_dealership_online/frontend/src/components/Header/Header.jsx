import './Header.css';
import Button from '../Button/Button'


export default function Header(){
    return(
        <header className='header'>
            <div className="header__container">
                <div className="logo">
                    <h1>MotorHouse</h1>
                </div>
                <div className="nav">
                    <Button>КАТАЛОГ</Button>
                    <Button>ЗВОНОК</Button>
                </div>
            </div>
            <hr></hr>
        </header>
    )
}