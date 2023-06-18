import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const itemCount = cartItems.reduce((count, cartItem) => count += cartItem.quantity, 0);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {

        let added = false;

        for (let item of cartItems) {
            if (item.id === productToAdd.id) {
                item.quantity++;
                added = true;
                break;
            }
        }

        if (added === false) {
            productToAdd.quantity = 1;
            cartItems.push(productToAdd);
        }

        const updatedCartItems = [...cartItems];
        
        setCartItems(updatedCartItems);
    };

    const value = {isCartOpen, setCartOpen, addItemToCart, cartItems, cartItemCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}