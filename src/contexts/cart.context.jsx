import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    deleteItemFromCart: () => {},
    cartItemCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const itemCount = cartItems.reduce((count, cartItem) => count += cartItem.quantity, 0);
        setCartItemCount(itemCount);
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

    const deleteItemFromCart = (productToDelete, option=1) => {
        // option: 1 -> remove a single item; 0 -> remove all items;
        let updatedCartItems = [];

        if (option === 0 || productToDelete.quantity === 1) {
            updatedCartItems = cartItems.filter(cartItem => {
                return cartItem.id !== productToDelete.id;
            }) 
        }
        else {
            updatedCartItems = cartItems.map(cartItem => {
                return cartItem.id === productToDelete.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem;
            })
        }

        setCartItems(updatedCartItems);
    }

    const value = {isCartOpen, setCartOpen, addItemToCart, deleteItemFromCart, cartItems, cartItemCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}