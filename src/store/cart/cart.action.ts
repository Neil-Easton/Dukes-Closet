import { CART_ACTION_TYPE, CartItem } from "./cart.types";
import { store } from "../store";
import { ActionWithPayload, CategoryItem } from "../category/category.types";
import { withMatcher } from "../../utils/firebase/reducer.utils";

export type ModifyCart = ActionWithPayload<CART_ACTION_TYPE.MODIFY_CART, CartItem[]>;
export type SetCartOpen = ActionWithPayload<CART_ACTION_TYPE.TOGGLE_CART_OPEN, boolean>;
export type SetCartItemCount = ActionWithPayload<CART_ACTION_TYPE.COUNT_ITEM_NUMBER, number>;

export const addItemToCart = withMatcher((productToAdd = {} as CartItem, cartItems = [] as CartItem[]): ModifyCart => {  

    let added = false;

    // const state = store.getState();

    // const cartItems = state.cart.cartItems;

    // for (let item of cartItems) {
    //     if (item.id === productToAdd.id) {
    //         item.quantity++;
    //         added = true;
    //         break;
    //     }
    // }

    cartItems = cartItems.map((cartItem) => {
        if(cartItem.id === productToAdd.id) {
            added = true;
            return {...cartItem, quantity: cartItem.quantity+1};
        }
        else {
            return cartItem;
        }
    })

    if (added === false) {
        productToAdd.quantity = 1;
        cartItems.push(productToAdd as any as CartItem);
    }

    const updatedCartItems = [...cartItems];
    
    return ({type: CART_ACTION_TYPE.MODIFY_CART, payload: updatedCartItems});
});

export const deleteItemFromCart = withMatcher((cartItems=[] as CartItem[], productToDelete={} as CartItem, option=1) => {
    // option: 1 -> remove a single item; 0 -> remove all items;
    let updatedCartItems = [] as CartItem[];

    // const state = store.getState();
    // const cartItems = state.cart.cartItems;

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
});

export const setCartOpen = withMatcher((isCartOpen: boolean): SetCartOpen => {
    return ({type: CART_ACTION_TYPE.TOGGLE_CART_OPEN, payload: isCartOpen});
});

export const setCartItemCount = withMatcher((cartItemCount: number): SetCartItemCount => {
    return ({type: CART_ACTION_TYPE.COUNT_ITEM_NUMBER, payload: cartItemCount});
})
