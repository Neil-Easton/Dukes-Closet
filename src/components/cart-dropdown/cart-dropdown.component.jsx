import { useContext, useEffect } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.action';

import {CartDropdownContainerStyledDiv, CartItemsStyledDiv} from './cart-dropdown.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';

const CartDropdown = () => {
    // const {setCartOpen} = useContext(CartContext);

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    let navigate = useNavigate();

    const redirectCheckOutPage = (event) => {
        event.preventDefault();
        dispatch(setCartOpen(false));
        navigate("/checkout");
    }

    return (
        <CartDropdownContainerStyledDiv>
            <CartItemsStyledDiv>
                {cartItems.length ? cartItems.map((item => {
                    return (
                        <CartItem key={item.id} cartItem={item}/>
                    )
                })) : <span className='empty-message'>Your cart is empty</span>}
            </CartItemsStyledDiv>
            <Button label="GO TO CHECKOUT" onClick={redirectCheckOutPage}></Button>
        </CartDropdownContainerStyledDiv>
    )
}

export default CartDropdown;