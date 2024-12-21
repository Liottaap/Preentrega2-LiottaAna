import { useState } from "react";


function ItemCount ({stock, initial, onAdd}){
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {if(quantity < stock){setQuantity(quantity+1)}}
    const decrement = () => {if(quantity > 1){setQuantity(quantity-1)}}


    return(
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-between w-96 p-10">
                <button onClick={decrement} className="text-xl">-</button>
                <h3 className="text-xl">{quantity}</h3>
                <button onClick={increment} className="text-xl">+</button>
            </div>
            <div>
                <button className="text-2xl border-2 pl-5 pr-5 pt-2 pb-2 rounded-xl hover:bg-primary hover:text-whitesmoke" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}






export default ItemCount; 