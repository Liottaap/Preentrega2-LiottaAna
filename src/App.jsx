import { BrowserRouter , Routes , Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Faqs from "./pages/Faqs";
import ItemListContainer from "./components/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer";

 function App(){
    return(
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer/>} />
                        <Route path="category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                        <Route path="faqs" element={<Faqs/>} />
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;