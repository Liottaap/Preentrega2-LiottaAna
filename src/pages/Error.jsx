import { Link } from "react-router-dom"

function Error(){
    return(
    <main className="flex flex-col justify-center items-center">
        <h1 className="text-9xl">404</h1>
        <p className="text-4xl">Pagina no encontrada</p>
        <Link to="/" className="mb-10 mt-20 ml-5 w-14  text-primary text-xl" >Volver</Link>
    </main>
    )
}

export default Error;