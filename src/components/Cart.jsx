import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext);
    console.log(cart)
    if(totalQuantity === 0) {
        return(
            <div className="flex flex-col items-center gap-10 ">
                <h1 className="text-3xl text-center mt-20">No hay items en el carrito</h1>
                <Link to="/" className="w-14 text-primary text-xl" >Volver</Link>
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-5 m-10 ">
            {cart.map(p => <CartItem key={p.id}{...p}/>)}

            <div className="flex mb-20">
                <h3 className="text-2xl">Total: ${total}</h3>
                <button onClick={() => clearCart()} className="ml-auto">Limpiar carrito</button>
            </div>
            
            <Link to="/checkout" className="w-full h-auto ml-auto mr-auto text-center text-2xl bg-whitesmoke border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-whitesmoke hover:w-52 hover:rounded-2xl transition-all">Checkout</Link>
        </div>
    )
}

export default Cart;