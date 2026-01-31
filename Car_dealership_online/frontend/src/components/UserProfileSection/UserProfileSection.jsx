export default function UserProfileSection({ user }) {
    return (
      <section className="user-profile-section">
        <h2 className="section-title">Ваши данные</h2>
        
        <div className="user-avatar">
          <div className="avatar-circle">
            <span>ИИ</span>
          </div>
        </div>
        
        <div className="user-details">
          <div className="detail-item">
            <span className="detail-label">ФИО:</span>
            <span className="detail-value">{user?.fullName}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user?.email}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Телефон:</span>
            <span className="detail-value">{user?.phone}</span>
          </div>
        </div>
        
        <button className="logout-button">
          Выйти из аккаунта
        </button>
      </section>
    );
  }