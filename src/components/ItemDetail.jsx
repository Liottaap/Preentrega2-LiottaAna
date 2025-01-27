import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Returnbutton } from "./Icons/Icons";


const ItemDetail = ({ id, nombre, img, categoria, desc, items, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, nombre, precio };

        addItem(item, quantity);
    };

    return (
        <article className="flex  w-full  gap-10 ">
            <section className="flex flex-col w-1/2 gap-10 mt-20 object-contain">
                <img src={img} alt={nombre} className="shadow-xl h-4/5 " />
                <Link to="/" className="mb-10 ml-5 w-14 text-primary text-xl items-end">Volver</Link>
            </section>

            <section className="text-center w-1/2 gap-7 flex flex-col">
                <h2 className="text-4xl mt-20 w-full">{nombre}</h2>
                <p>Categoría: {categoria}</p>
                <h3 className="text-3xl"> $ {precio}</h3>
                <section>
                    {quantityAdded > 0 ? (
                        <div className="flex gap-5 justify-center items-center">
                            <Returnbutton/>
                            <Link to="/cart" className="w-auto h-auto text-center text-2xl bg-whitesmoke bg-primary text-primary px-4 py-2 rounded-md hover:bg-primary  hover:text-whitesmoke transition-all"> Ir al carrito </Link>
                        </div>

                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </section>

                <p className="text-xl text-left p-5">{desc}</p>
                <p className="text-xl text-left p-5">{items}</p>
            </section>
        </article>
    );
};

export default ItemDetail;