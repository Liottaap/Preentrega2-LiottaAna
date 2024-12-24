import { Link } from "react-router-dom"

function Error(){
    return(            
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center gap-5 w-100 h-5/6 text-3xl p-20">
            <h1 className="text-9xl">404</h1>
            <p className="text-4xl">Pagina no encontrada</p>
            </div>

            <Link to="/" className="mb-10 ml-5 w-14 text-primary text-xl hover:border-b-2">Volver</Link>
        </div>
    )
}

export default Error;