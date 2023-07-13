import { CartItem } from "../../store/cart/cart.types.js";
import {CartItemContainerStyledDiv, ItemDetailsStyledDiv} from "./cart-item.styles";

const SingleCartItem = ({cartItem} : {cartItem: CartItem}) => {

    const {name, quantity, imageUrl, price} = cartItem as CartItem&{name: string, imageUrl: string, price: string};

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

export default SingleCartItem;