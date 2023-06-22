import {CartItemContainerStyledDiv, ItemDetailsStyledDiv} from "./cart-item.styles.jsx";

const CartItem = ({cartItem}) => {

    const {name, quantity, imageUrl, price} = cartItem;

    return (
        <CartItemContainerStyledDiv>
            <img src={imageUrl} alt={name} />
            <ItemDetailsStyledDiv>
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetailsStyledDiv>
        </CartItemContainerStyledDiv>
    )

}

export default CartItem;