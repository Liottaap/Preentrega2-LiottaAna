import { Link, NavLink } from "react-router-dom";
import fondoNavbar from "../assets/12067355_4884273.jpg"
import CartWidget from './CartWidget';


function NavBar(){
    
    return(
        <nav className="flex w-full h-40 justify-between pl-20 pd- items-center bg-cover bg-center text-whitesmoke text-xl"  style={{ backgroundImage: `url(${fondoNavbar})` }}>
            <div className="flex gap-5">
                <Link to="/">Inicio</Link>
                <Link to="/faqs">Faqs</Link>
            </div>

            <div className="flex gap-10 ">
                <NavLink to={`/category/tablets`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/Notebooks`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
                <NavLink to={`/category/Tv`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tv</NavLink>
                <NavLink to={`/category/Hardware`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Hardware</NavLink>
                <NavLink to={`/category/Promos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Promos</NavLink>

            </div>

            <CartWidget className="flex-grow" />
        </nav>
    )
}

export default NavBar;

