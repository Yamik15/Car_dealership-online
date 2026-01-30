import './Button.css'
import { Link } from 'react-router-dom';

export default function Button({children, to, onClick, className = ''}){
    const buttonClassName = `button ${className}`
    if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        {children}
      </Link>
    );
  }
    return <button className='button' onClick={onClick}>{children}</button>
}