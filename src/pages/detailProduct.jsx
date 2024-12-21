import { Link , useParams } from "react-router-dom";
import listaProductos from "../listaProductos";
function Producto(){
    const {productoId } = useParams();

    const producto = listaProductos.find( (producto)=>producto.id == productoId );
    const { img , titulo , precio} = producto;
    return (
        <div className="galeria">
            <img src={img}/>
            <h2>{titulo}</h2>
            <h3>Precio: $ {precio}</h3>
            <Link to="/producto">Volver</Link>
        </div>
    )
}

export default Producto;