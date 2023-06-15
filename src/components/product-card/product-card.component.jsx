import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({product}) => {
    const {id, name, imageUrl, price} = product;

    const onClickHandler = () => {
        
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