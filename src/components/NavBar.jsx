import Logo from './Logo';
import Logoimg from '../assets/logoimg.png'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="flex w-full h-40 justify-around items-center  bg-primary">

            <Logo url={Logoimg} className="flex-grow"/>

            <ul className="list-none flex flex-row justify-center items-center gap-6 pl-6 flex-grow ">
                <Link to="/">Inicio</Link>
                <Link to="/catalogo">Catalogo</Link>
                <Link to="/Faqs">Faqs</Link>
            </ul>

            <CartWidget className="flex-grow" />
        </nav>
    )
}

export default NavBar;

