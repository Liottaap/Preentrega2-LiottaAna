import { Link , useParams } from "react-router-dom";
import listaProductos from "../listaProductos";

function DetalleProducto(){
    const {productoId } = useParams();

    const producto = listaProductos.find( (producto)=>producto.id === productoId );
    const { img , titulo , precio} = producto;
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <img src={img} alt=""/>
            <h2>{titulo}</h2>
            <h3>Precio: $ {precio}</h3>
            <Link to="/productos">Volver</Link>
        </div>
    )
}

export default DetalleProducto;