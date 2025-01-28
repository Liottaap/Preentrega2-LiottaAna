import LeftArrow from "../../assets/left-arrow-direction-svgrepo-com.svg"
import { Link } from "react-router-dom"
import UbicationImg from "../../assets/icons8-ubicación.gif"

export const Returnbutton = () => {
    return(
        <Link to="/">
            <img src={LeftArrow} alt="Botón volver" className="w-12 h-12 bg-primary rounded-full" />
        </Link>
    );
};

export const Ubication = () => {
    return(
        <img src={UbicationImg} alt='Ubicación del local'></img>
    )
}