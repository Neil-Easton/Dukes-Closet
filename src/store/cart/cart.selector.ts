import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectCartItems = (state: RootState) => {
    return state.cart.cartItems;
}

export const selectIsCartOpen = (state: RootState) => {
    return state.cart.isCartOpen;
}

export const selectCartItemCount = (state: RootState) => {
    return state.cart.cartItemCount;
}