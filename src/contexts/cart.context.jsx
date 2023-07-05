//Replaced with Redux implemetation

// import { createContext, useEffect, useState, useReducer } from "react";

// // export const CartContext = createContext({
// //     isCartOpen: false,
// //     setCartOpen: () => {},
// //     cartItems: [],
// //     addItemToCart: () => {},
// //     deleteItemFromCart: () => {},
// //     cartItemCount: 0
// // });

// export const CartContext = createContext();

// export const CART_ACTION_TYPES = {
//     modifyCart: 'MODIFY_CART',
//     toggleCartOpen: 'TOGGLE_CART_OPEN',
//     countItemNumber: 'COUNT_ITEM_NUMBER'
// };

// const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItems: [],
//     cartItemCount: 0
// };

// const cartReducer = (state, action) => {
//     const {type, payload} = action;

//     switch (type) {
//         case 'MODIFY_CART':
//             console.log('cart modified with dispatch function');
//             return {
//                 ...state,
//                 cartItems: payload
//             }
//         case 'TOGGLE_CART_OPEN':
//             console.log('toggle cart open with dispatch function');
//             return {
//                 ...state,
//                 isCartOpen: payload
//             }
//         case 'COUNT_ITEM_NUMBER':
//             console.log('count item number with dispatch function');
//             return {
//                 ...state,
//                 cartItemCount: payload
//             }
//         default:
//             throw new Error(`unhandled type of ${type} in cartReducer`);
//     }
// }

// export const CartProvider = ({children}) => {
//     // const [isCartOpen, setCartOpen] = useState(false);
//     // const [cartItems, setCartItems] = useState([]);
//     // const [cartItemCount, setCartItemCount] = useState(0);

//     const [{cartItems}, dispatchCartItems] = useReducer(cartReducer, INITIAL_STATE);
//     const [{isCartOpen}, dispatchToggleCart] = useReducer(cartReducer, INITIAL_STATE);
//     const [{cartItemCount}, dispatchCartItemCount] = useReducer(cartReducer, INITIAL_STATE);

//     // useEffect(() => {
//     //     const itemCount = cartItems.reduce((count, cartItem) => count += cartItem.quantity, 0);
//     //     setCartItemCount(itemCount);
//     // }, [cartItems]);

//     // const setCartItems = (cartItems) => {
//     //     dispatchCartItems({type: CART_ACTION_TYPES.modifyCart, payload: cartItems});
//     // }

//     // const setCartOpen = (isCartOpen) => {
//     //     dispatchToggleCart({type: CART_ACTION_TYPES.toggleCartOpen, payload: isCartOpen});
//     // }

//     // const setCartItemCount = (cartItemCount) => {
//     //     dispatchCartItemCount({type: CART_ACTION_TYPES.countItemNumber, payload: cartItemCount});
//     // }

//     // const addItemToCart = (productToAdd) => {

//     //     let added = false;

//     //     for (let item of cartItems) {
//     //         if (item.id === productToAdd.id) {
//     //             item.quantity++;
//     //             added = true;
//     //             break;
//     //         }
//     //     }

//     //     if (added === false) {
//     //         productToAdd.quantity = 1;
//     //         cartItems.push(productToAdd);
//     //     }

//     //     const updatedCartItems = [...cartItems];
        
//     //     setCartItems(updatedCartItems);
//     // };

//     // const deleteItemFromCart = (productToDelete, option=1) => {
//     //     // option: 1 -> remove a single item; 0 -> remove all items;
//     //     let updatedCartItems = [];

//     //     if (option === 0 || productToDelete.quantity === 1) {
//     //         updatedCartItems = cartItems.filter(cartItem => {
//     //             return cartItem.id !== productToDelete.id;
//     //         }) 
//     //     }
//     //     else {
//     //         updatedCartItems = cartItems.map(cartItem => {
//     //             return cartItem.id === productToDelete.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem;
//     //         })
//     //     }

//     //     setCartItems(updatedCartItems);
//     // }

//     // const value = {isCartOpen, setCartOpen, addItemToCart, deleteItemFromCart, cartItems, cartItemCount};
//     const value = {cartItemCount};

//     return (
//         <CartContext.Provider value={value}>{children}</CartContext.Provider>
//     )
// }