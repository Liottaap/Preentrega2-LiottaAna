import Logo from './Logo';
import CartWidget from './CartWidget';
import Logoimg from '../assets/logoimg.png'
import ItemListContainer from './ItemListContainer';



function NavBar(){
    return(
        <div className="flex w-full h-40 justify-around items-center  bg-primary">
            <div className='flex items-center'>
                <Logo url={Logoimg} className="flex-grow"/>
                <ItemListContainer greeting='¡Bienvenido!' className='text-[#fff] text-2xl align-middle'/>
            </div>

            <ul className="list-none flex flex-row justify-center items-center gap-6 pl-6 flex-grow ">
                <li><a className='text-[#fff] text-2xl' href="/">Inicio</a></li>
                <li><a className='text-[#fff] text-2xl' href="/">Categorías</a></li>
                <li><a className='text-[#fff] text-2xl' href="/">Ofertas</a></li>
                <li><a className='text-[#fff] text-2xl' href="/">FAQS</a></li>
                <li><a className='text-[#fff] text-2xl' href="/">Favoritos</a></li>
            </ul>

            <CartWidget className="flex-grow" />
        </div>
    )
}

export default NavBar;

