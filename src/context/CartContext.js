import { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart , totalQuantity, total}}
        >
            {children}
        </CartContext.Provider>
    );
};

