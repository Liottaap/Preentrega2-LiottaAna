import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/catalogo"
import Error from "./pages/Error";
import Producto from "./pages/detailProduct";
/* import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";

/ function App (){
    return(  
        <div className="flex flex-col h-50 align-middle">
            <NavBar/>
            <ItemListContainer greeting="¡BIENVENIDOS!"/>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}  />
        </div>
    )
} 
  */
 function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Inicio/>} />
                    <Route path="catalogo" element={<Catalogo/>}>
                        <Route path="productos/:productoId" element={<Producto/>}/>
                    </Route>
                    <Route path="Faqs"/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;