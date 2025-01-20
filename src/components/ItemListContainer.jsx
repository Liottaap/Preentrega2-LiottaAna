
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../listaProductos'
import { useParams } from "react-router-dom";
import ItemList from './ItemList'


function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {
        const asynFunc = categoryId ? getProductsByCategory : getProducts;


        asynFunc(categoryId)
            .then((resp) =>{
                setProducts(resp);
            })
            .catch(error => {console.error(error);
            })
    }, [categoryId])


    return (
        <div className="h-screen">
            <h1 className="text-5xl text-center w-full  pt-10 ">{greeting}</h1>
            <ItemList products={products}/>
        </div>

    );
}

export default ItemListContainer;