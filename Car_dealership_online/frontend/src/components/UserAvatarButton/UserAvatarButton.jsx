import './UserAvatarButton.css'

export default function UserAvatarButton(){
    return(
        <button
            className="user-avatar-button"
            aria-label="Личный кабинет"
            title="Перейти в личный кабинет"
        >
        <div className="user-avatar-button__circle">
            <span className="user-avatar-button__initials"></span>
        </div>
        </button>
    )
}