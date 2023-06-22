import { useContext, useEffect } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import {CartDropdownContainerStyledDiv, CartItemsStyledDiv} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const {cartItems, setCartOpen} = useContext(CartContext);

    let navigate = useNavigate();

    const redirectCheckOutPage = (event) => {
        event.preventDefault();
        setCartOpen(false);
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