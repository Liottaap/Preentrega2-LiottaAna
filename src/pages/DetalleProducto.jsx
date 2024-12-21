import { Link , useParams } from "react-router-dom";
import listaProductos from "../listaProductos";
import ItemCount from "../components/ItemCount";

function DetalleProducto(){
    const {productoId } = useParams();

    const producto = listaProductos.find((producto) => producto.id === parseInt(productoId));
    const { img , nombre , precio} = producto;
    return (
        <div className="flex flex-col justify-between mt-30 h-screen bg-300-red">
            <div className="flex justify-around">
                <img src={img} alt="" className=" shadow-xl w-1/2"/>
                <div className="flex flex-col justify-around text-center">
                    <h2 className="text-4xl mt-20 w-full">{nombre}</h2>
                    <h3 className="text-2xl ">Precio: $ {precio}</h3>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}  />

                </div>

            <div>


            </div>
            
            </div>
            <Link to="/productos" className="mb-10 ml-5 w-14 text-primary text-xl hover:border-b-2" >Volver</Link>
        </div>

    )
}

export default DetalleProducto;