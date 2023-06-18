import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;

    const {addItemToCart} = useContext(CartContext);

    const onClickHandler = () => {
        addItemToCart(product);
    }

    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} />
            <Button label="ADD TO CART" buttonType="inverted" onClick={onClickHandler}/>
            <div className="tag">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ProductCard;