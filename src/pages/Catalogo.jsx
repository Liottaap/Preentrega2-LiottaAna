import listaProductos  from "../listaProductos";
import { Link } from "react-router-dom";

function Catalogo(){
    return(
        <div className="flex flex-col gap-10">
            <h1 className="text-5xl text-center w-full border-b-2 pt-10">Productos</h1>
            <div className="flex flex-wrap gap-20">
                {listaProductos.map((producto) => {
                    return(
                        <article className="flex flex-col gap-5 justify-center items-center m-auto w-1/6 flex-wrap w-30 h-92 shadow-xl bg-white ">
                            <h3 className="text-lg">{producto.nombre}</h3>
                            <img className="w-full h-40 object-fill" src={producto.img} alt=""/>
                            <Link to={`/catalogo/${producto.id}`}>Mas Info</Link>
                           
                        </article>
                    )
                })}
            </div>
            <Link to="/" className="mb-10 ml-5 w-14 text-primary text-xl hover:border-b-2" >Volver</Link>
        </div>
    )
}

export default Catalogo;