import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../listaProductos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {console.error(error)})

    }, [itemId])

    return(
        <div> <ItemDetail {...product} /> </div>
    )
}

export default ItemDetailContainer;