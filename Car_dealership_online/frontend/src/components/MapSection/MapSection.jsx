import './MapSection.css'

export default function MapSection(){
    return(
        <div className="map__container">
            <div className="map">
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=50.193977%2C53.217241&z=15&l=map&pt=50.193977%2C53.217241%2Cpm2rdm"
                    width="100%"
                    height="100%"
                    style={{ 
                    border: 'none'
                    }}
                    allowFullScreen
                />
            </div>
        </div>
    )
}