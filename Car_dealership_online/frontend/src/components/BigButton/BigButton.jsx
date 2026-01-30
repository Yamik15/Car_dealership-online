import './BigButton.css'
import { useNavigate } from 'react-router-dom';

export default function BigButton({
    icon,
    text,
    to,
    description,
    onClick,
    className=""
}){
    const navigate = useNavigate()
    const handleClick = () => {
    if (to) {
      navigate(to); 
    } else if (onClick) {
      onClick(); 
    }
  }
    return(
        <button 
            className={`big-button ${className}`}
            onClick={handleClick}
        >
            {icon && (
                <div className="big-button__icon">
                    {typeof icon === 'string' ? (
                        <img src={icon} alt="" className="big-button__icon-image" />
                    ) : (icon)}
                </div>
            )}
            
            <div className="big-button__content">
                <div className="big-button__text">{text}</div>
                {description && (
                    <div className="big-button__description">{description}</div>
                )}
            </div>
        </button>
    )
}
