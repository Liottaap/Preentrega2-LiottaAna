import { useContext, useState } from "react";
import { writeBatch, Timestamp, collection, documentId } from "firebase/firestore"
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm"
import { db } from "../config/firebase";
import { getDocs, addDoc, where, query } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart } = useContext(CartContext)


    const createOrder = async({name, phone, email}) => {
        setLoading(true)
        try{
            console.log('creando orden con:', {name, phone, email})
            const objOrder = {
                buyer: {name, phone, email},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };
            console.log("Carrito:", cart);
        const batch = writeBatch(db);
        const outOfStock = []
        const ids = cart.map(prod => prod.id)
        const productsRef = collection(db, "Items")
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
        const {docs} = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock
            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity
            
            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, {stock:stockDb - prodQuantity})
            }else{
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit()
            const orderRef = collection (db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            console.log("Orden creada con ID:", orderAdded.id);
            setOrderId(orderAdded.id)
            clearCart()
        }else{console.error('Hay productos que están fuera de stock')}
        
    } catch(error) { console.error(error)
    } finally { setLoading(false)}
    }
    if (loading) {
        return(
            <main className=" flex flex-col gap-20">
               <h1 className="text-4xl text-center  mt-20">Se está generando su orden ... </h1>
            </main>
        )

        
    }
    if(orderId) {
        return (
            <main className="flex flex-col gap-20">
                <h1 className="text-4xl flex justify-center mt-20">El id de su orden es: {orderId}</h1>
                <Link to="/" className="mt-10 ml-5 w-14 text-primary text-xl" >Volver</Link>
            </main>
            
        )
    }

    return (
        <div className=" flex flex-col gap-5">
            <h1 className="text-3xl ml-auto mr-auto pt-10 pb-10">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )   
}

export default Checkout;