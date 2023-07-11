import { AnyAction } from "redux";
import { CART_ACTION_TYPE, CartItem } from "./cart.types";
import { addItemToCart, deleteItemFromCart, setCartItemCount, setCartOpen } from "./cart.action";

export type CartState = {
    readonly isCartOpen: boolean,
    readonly cartItems: CartItem[],
    readonly cartItemCount: number,
}

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [] as CartItem[],
    cartItemCount: 0
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

    if (addItemToCart.match(action) || deleteItemFromCart.match(action)) {
        return {...state, cartItems: action.payload};
    }
    else if (setCartOpen.match(action)) {
        return {...state, isCartOpen: action.payload};
    }
    else if (setCartItemCount.match(action)) {
        return {...state, cartItemCount: action.payload};
    }

    return state;
    // const {type, payload} = action;

    // switch (type) {
    //     case CART_ACTION_TYPE.MODIFY_CART:
    //         // console.log('cart modified with dispatch function');
    //         return {
    //             ...state,
    //             cartItems: payload
    //         }
    //     case CART_ACTION_TYPE.TOGGLE_CART_OPEN:
    //         // console.log('toggle cart open with dispatch function');
    //         return {
    //             ...state,
    //             isCartOpen: payload
    //         }
    //     case CART_ACTION_TYPE.COUNT_ITEM_NUMBER:
    //         // console.log('count item number with dispatch function');
    //         return {
    //             ...state,
    //             cartItemCount: payload
    //         }
    //     default:
    //         return state;
    // }
}