import ItemListContainer from "../components/ItemListContainer"
import Productos from "./Productos";
import Faqs from "./Faqs";

function Inicio () {
    return(
        <div className="flex flex-col min-h-screen ">
            <ItemListContainer greeting="¡BIENVENIDOS A CIRCUITO-X!"/>
            <Productos />
            <Faqs/>
        </div>

    )
}

export default Inicio;