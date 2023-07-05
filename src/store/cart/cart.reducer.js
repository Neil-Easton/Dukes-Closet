import { CART_ACTION_TYPE } from "./cart.types";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemCount: 0
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case CART_ACTION_TYPE.MODIFY_CART:
            // console.log('cart modified with dispatch function');
            return {
                ...state,
                cartItems: payload
            }
        case CART_ACTION_TYPE.TOGGLE_CART_OPEN:
            // console.log('toggle cart open with dispatch function');
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPE.COUNT_ITEM_NUMBER:
            // console.log('count item number with dispatch function');
            return {
                ...state,
                cartItemCount: payload
            }
        default:
            return state;
    }
}