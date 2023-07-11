export enum CART_ACTION_TYPE {
    MODIFY_CART = 'MODIFY_CART',
    TOGGLE_CART_OPEN = 'TOGGLE_CART_OPEN',
    COUNT_ITEM_NUMBER = 'COUNT_ITEM_NUMBER',
}

export type CartItem = {
    id: number,
    quantity: number,
}


