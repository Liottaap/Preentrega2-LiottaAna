import { Link } from "react-router-dom";



const Item = ({id, nombre, img, precio }) => {
    return(
        <article className="flex flex-col gap-5 justify-center items-center m-auto w-1/6 flex-wrap w-30 h-92 shadow-xl bg-white ">
            <h3 className="text-lg">{nombre}</h3>
            <img className="w-full h-40 object-fill" src={img} alt={nombre}/>
            <p>{precio}</p>
            <Link to={`/item/${id}`}>Mas Info</Link>
        </article>
    )
}

export default Item;