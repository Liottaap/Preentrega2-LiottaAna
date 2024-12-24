import { useState } from "react";
import { useCart } from  "../components/CartContext"

function ItemCount ({ stock, initial }){
    const [quantity, setQuantity] = useState(initial)
    const { addToCart } = useCart();
    
    const increment = () => {if(quantity < stock){setQuantity(quantity+1);}}
    const decrement = () => {if(quantity > 1){setQuantity(quantity-1)}}


    return(
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-between w-56 p-2">
                <button onClick={decrement} className="text-xl w-auto h-auto bg-primary pl-2 pr-2 rounded-sm text-whitesmoke">-</button>
                <h3 className="text-xl">{quantity}</h3>
                <button onClick={increment} className="text-xl w-auto h-auto bg-primary pl-2 pr-2 rounded-sm text-whitesmoke">+</button>
            </div>
            <div>
            <button
                    className="text-2xl border-2 pl-5 pr-5 pt-2 pb-2 rounded-sm hover:bg-primary hover:text-whitesmoke"
                    onClick={() => addToCart(quantity)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount; 