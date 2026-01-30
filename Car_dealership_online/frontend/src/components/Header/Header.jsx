import './Header.css'
import UserAvatarButton from '../UserAvatarButton/UserAvatarButton'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <header className='header'>
            <div className="header__container">
                <Link to="/" className="logo">
                    <h1>MotorHouse</h1>
                </Link>
                <div className="nav">
                    <Button to="/catalog">КАТАЛОГ</Button>
                    <Button>ЗВОНОК</Button>
                    <UserAvatarButton to="/account"/>
                </div>
            </div>
            <hr></hr>
        </header>
    )
}