import './BigButton.css'

export default function BigButton({
    icon,
    text,
    description,
    onClick,
    className=""
}){
    return(
        <button 
            className={`big-button ${className}`}
            onClick={onClick}
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
