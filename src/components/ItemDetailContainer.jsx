import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'Items', itemId)
        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {console.error(error)})

    }, [itemId])

    
    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;