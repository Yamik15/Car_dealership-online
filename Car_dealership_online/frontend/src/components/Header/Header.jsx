import './Header.css';
import Button from '../Button/Button'
import UserAvatarButton from '../UserAvatarButton/UserAvatarButton'


export default function Header(){
    return(
        <header className='header'>
            <div className="header__container">
                <a className="logo">
                    <h1>MotorHouse</h1>
                </a>
                <div className="nav">
                    <Button>КАТАЛОГ</Button>
                    <Button>ЗВОНОК</Button>
                    <UserAvatarButton/>
                </div>
            </div>
            <hr></hr>
        </header>
    )
}