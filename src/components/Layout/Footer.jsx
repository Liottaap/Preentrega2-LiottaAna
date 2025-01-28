
import Instagram from "../../assets/icon_instagram.png"
import Facebook from "../../assets/icon_facebook.png"
import Whatsapp from "../../assets/icon_whatsapp.png"
import { Link } from "react-router-dom"


function Footer(){
    
    return(
        <footer className=" flex justify-between items-center bg-primary p-4">
            <p className="text-xl text-whitesmoke pl-10">© Página hecha por Ana Liotta</p>
            <picture className="flex pr-10 gap-5">
                <Link to="#"><img src={Instagram} alt="Instagram" className="w-12 h-12"/></Link>
                <Link><img src={Facebook} alt="Facebook" className="w-12 h-12"/></Link>
                <Link><img src={Whatsapp} alt="Whatsapp" className="w-12 h-12" /></Link>
            </picture>
        </footer>
    )
}

export default Footer;

