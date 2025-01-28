import { useState, useEffect } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";


function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(db,'Items'),where('categoria', '==', categoryId))
        : collection(db,'Items')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data ()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {console.log(error)})
        .finally(() => {setLoading(false)})
    })


    return (
        <main className=" pb-20 pr-5 pl-5">
            <h1 className="text-5xl text-center w-full  pt-10">{greeting}</h1>
            <ItemList products={products}/>
        </main>

    );
}

export default ItemListContainer;