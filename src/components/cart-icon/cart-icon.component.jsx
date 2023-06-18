import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import "./cart-icon.styles.scss";
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setCartOpen, cartItemCount} = useContext(CartContext);

    const onClickHandler = () => {
        setCartOpen(!isCartOpen);
    }

    return (
        <div>
            <div className='cart-icon-container' onClick={onClickHandler}>
                <ShoppingIcon className='shopping-icon'/>
                <span className='item-count'>{cartItemCount}</span>
            </div>
        </div>
    )
}

export default CartIcon;