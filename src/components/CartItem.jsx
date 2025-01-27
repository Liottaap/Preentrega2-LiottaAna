
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({id, precio, nombre, quantity }) => {

    const { removeItem } = useContext(CartContext);
    const masDeUno = quantity > 1;

    return(
        <div className="flex justify-between items-center border-b border-primary py-4">

            <div className="">
                    <h2 className="text-xl font-semibold">{nombre}</h2>
                    <p>Precio unitario: ${precio}</p>
                    <p>Cantidad: {quantity}</p>
                    <p className="text-2xl" style={{display: masDeUno > 0 ? 'block' : 'none'}}>Total: ${precio * quantity}</p>
            </div>

            <button onClick={() => removeItem(id)} className="w-auto  h-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
            >Eliminar</button>
        </div>
    );
}

export default CartItem;
