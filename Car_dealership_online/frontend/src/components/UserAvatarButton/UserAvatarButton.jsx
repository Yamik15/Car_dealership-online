import './UserAvatarButton.css'
import Popup from '../Popup/Popup'
import { useState } from 'react'

export default function UserAvatarButton(){
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [popupMode, setPopupMode] = useState('login')
    const handleOpenPopup = (mode) => {
        setPopupMode(mode);
        setIsPopupOpen(true);
    }
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }
    return(
        <>
        <button
            className="user-avatar-button"
            aria-label="Личный кабинет"
            title="Перейти в личный кабинет"
            onClick={() => handleOpenPopup('login')}
        >
        <div className="user-avatar-button__circle">
            <span className="user-avatar-button__initials"></span>
        </div>
        </button>
        <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            initialMode={popupMode}
        />
        </>
    )
}