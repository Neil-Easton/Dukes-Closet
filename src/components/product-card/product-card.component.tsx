import Button from "../button/button.component";
import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import {ProductCardStyledDiv, TagStyledDiv} from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/category/category.types";

const ProductCard = ({product}: {product: CategoryItem}) => {
    const {name, imageUrl, price} = product;
    const cartItems = useSelector(selectCartItems);

    // const {addItemToCart} = useContext(CartContext);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(addItemToCart(product, cartItems));
    }

    return (
        <ProductCardStyledDiv>
            <img src={imageUrl} alt={name} />
            <Button label="ADD TO CART" buttonType="inverted" onClick={onClickHandler}/>
            <TagStyledDiv>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </TagStyledDiv>
        </ProductCardStyledDiv>
    )
}

export default ProductCard;