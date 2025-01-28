import React from "react";
import Ubication from "../../assets/icons8-ubicación.gif"

const MapLink = () => {
    return(
        <main className="flex flex-col items-center">
            <div className="flex gap-10 justify-center items-center p-4 mt-10">
                <h2 className="text-2xl">Dónde encontrarnos</h2>
                <img src={Ubication} alt="Ubicación" className="w-10 h-10" />
            </div>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.2923613075446!2d-68.5198701194081!3d-31.536150796944366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816a8346e885ed%3A0x33e27cc3e57ea1ef!2sRivadavia%20416%2C%20J5402DEJ%20San%20Juan!5e0!3m2!1ses-419!2sar!4v1737939359436!5m2!1ses-419!2sar" 
                width="600" 
                height="450" 
                style={{ border: '0' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Mapa de ubicación"
            />
        </main>
    )
}

export default MapLink;