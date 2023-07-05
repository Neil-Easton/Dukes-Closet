import { CART_ACTION_TYPE } from "./cart.types";
import { store } from "../store";

export const addItemToCart = (productToAdd) => {

    let added = false;

    const state = store.getState();

    const cartItems = state.cart.cartItems;

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
    
    return ({type: CART_ACTION_TYPE.MODIFY_CART, payload: updatedCartItems});
};

export const deleteItemFromCart = (productToDelete, option=1) => {
    // option: 1 -> remove a single item; 0 -> remove all items;
    let updatedCartItems = [];

    const state = store.getState();
    const cartItems = state.cart.cartItems;

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

    return ({type: CART_ACTION_TYPE.MODIFY_CART, payload: updatedCartItems});
};

export const setCartOpen = (isCartOpen) => {
    return ({type: CART_ACTION_TYPE.TOGGLE_CART_OPEN, payload: isCartOpen});
};

export const setCartItemCount = (cartItemCount) => {
    return ({type: CART_ACTION_TYPE.COUNT_ITEM_NUMBER, payload: cartItemCount});
}
