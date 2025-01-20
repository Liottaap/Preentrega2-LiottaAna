import { Link } from "react-router-dom"

function Error(){
    return(
    <>
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <Link to="/" className="mb-10 ml-5 w-14 text-primary text-xl" >Volver</Link>
    </>
    )
}

export default Error;