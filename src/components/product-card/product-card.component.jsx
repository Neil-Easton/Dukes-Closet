import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {ProductCardStyledDiv, TagStyledDiv} from "./product-card.styles.jsx";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;

    const {addItemToCart} = useContext(CartContext);

    const onClickHandler = () => {
        addItemToCart(product);
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