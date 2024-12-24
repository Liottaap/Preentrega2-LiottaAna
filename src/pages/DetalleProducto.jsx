import { Link , useParams } from "react-router-dom";
import listaProductos from "../listaProductos";
import ItemCount from "../components/ItemCount";

function DetalleProducto(){
    const {productoId } = useParams();

    const producto = listaProductos.find((producto) => producto.id === parseInt(productoId));
    const { img , nombre , precio, desc, items} = producto;

    //hacer que la desc se vea en formato lista
    const descripcionLista = items
    .split("\n")
    .filter(line => line.trim().startsWith(">"))
    .map(line => line.replace(">", "").trim());

    return (
        <div className="flex flex-col justify-between bg-300-red  mt-20 ml-5 mr-5">
            <div className="flex justify-around w-100 h-auto gap-10">
                <img src={img} alt="" className=" shadow-xl w-2/4 h-auto object-contain "/>
                <div className="flex flex-col gap-10 text-center w-2/4">
                    <h2 className="text-4xl mt-20 w-full">{nombre}</h2>
                    <h3 className="text-3xl "> $ {precio}</h3>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}  />
                    <div className="flex flex-col gap-5 text-left p-5">
                        <p className="text-xl">{desc}</p>
                        <ul className="text-left list-disc ml-5">
                        {descripcionLista.map((item, index) => (
                            <li className="text-xl" key={index}>{item}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
            <Link to="/catalogo" className="mb-10 ml-5 w-14 text-primary text-xl hover:border-b-2" >Volver</Link>
        </div>
    )
}

export default DetalleProducto;