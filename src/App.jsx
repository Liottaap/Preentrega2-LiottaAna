import { BrowserRouter , Routes , Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Error from "./pages/Error";
import DetalleProducto from "./pages/DetalleProducto";
import Faqs from "./pages/Faqs";

 function App(){
    return(
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Inicio/>} />
                        <Route path="catalogo" element={<Catalogo/>}/>
                        <Route path="catalogo/:productoId" element={<DetalleProducto/>}/>
                        <Route path="faqs" element={<Faqs/>} />
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;