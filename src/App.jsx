import { BrowserRouter , Routes , Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Layout from "./components/Layout/Layout"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./pages/Error";
import Faqs from "./pages/Faqs";
import Checkout from "./components/Checkout";

function App(){
    return(
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer greeting={"¡Bienvenidos a Circuito-X!"}/>} />
                        <Route path="category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                        <Route path="faqs" element={<Faqs/>} />
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;