import { useContext, useEffect } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import { setCartOpen, setCartItemCount } from '../../store/cart/cart.action';
import { selectIsCartOpen, selectCartItems, selectCartItemCount } from '../../store/cart/cart.selector';

import {CartIconContainerStyledDiv, ItemCountStyledDiv, ShoppingIcon} from "./cart-icon.styles";
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    useEffect(() => {
        const itemCount = cartItems.reduce((count, cartItem) => {
            if (cartItem.quantity)
                count += cartItem.quantity
            return count;
        }, 0);
        dispatch(setCartItemCount(itemCount));
    }, [cartItems]);

    // const { cartItemCount} = useContext(CartContext);
    const cartItemCount = useSelector(selectCartItemCount);

    const isCartOpen = useSelector(selectIsCartOpen);

    const onClickHandler = () => {
        dispatch(setCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainerStyledDiv onClick={onClickHandler}>
            <ShoppingIcon/>
            <ItemCountStyledDiv>{cartItemCount}</ItemCountStyledDiv>
        </CartIconContainerStyledDiv>
    )
}

export default CartIcon;