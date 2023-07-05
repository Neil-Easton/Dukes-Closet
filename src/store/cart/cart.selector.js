import { createSelector } from "reselect";

export const selectCartItems = (state) => {
    return state.cart.cartItems;
}

export const selectIsCartOpen = (state) => {
    return state.cart.isCartOpen;
}

export const selectCartItemCount = (state) => {
    return state.cart.cartItemCount;
}