import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CartIconContainerStyledDiv, ItemCountStyledDiv, ShoppingIcon} from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { isCartOpen, setCartOpen, cartItemCount} = useContext(CartContext);

    const onClickHandler = () => {
        setCartOpen(!isCartOpen);
    }

    return (
        <CartIconContainerStyledDiv onClick={onClickHandler}>
            <ShoppingIcon/>
            <ItemCountStyledDiv>{cartItemCount}</ItemCountStyledDiv>
        </CartIconContainerStyledDiv>
    )
}

export default CartIcon;