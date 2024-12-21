import listaProductos  from "../listaProductos";
import { Link } from "react-router-dom";


function Catalogo(){
    return(
        <div className="flex flex-col gap-10">
            <h2>Productos</h2>
            <div>
                {listaProductos.map((producto) => {
                    return(
                        <article className="flex flex-col gap-5 w-1/6 flex-wrap">
                            <h3 className="text-lg">{producto.nombre}
                            </h3>
                            <img className="w-full h-1/2" src={producto.img}/>
                            <Link to={`/productos/${producto.id}`}>Mas Info</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Catalogo;