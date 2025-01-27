import { Link } from "react-router-dom";


const Item = ({id, nombre, img, precio }) => {
    return(
        <article className="flex flex-col h-82 w-1/6 mr-auto ml-auto pt-5 gap-5 justify-between items-center flex-wrap shadow-2xl bg-white">
            <h3 className="text-xl text-center ">{nombre}</h3>
            <img className="w-10/12 h-56 object-fill" src={img} alt={nombre}/>
            <p className="text-xl">${precio}</p>
            <Link to={`/item/${id}`} className="bg-primary w-full flex text-whitesmoke items-center justify-center p-2">Mas Info</Link>
        </article>
    )
}

export default Item;