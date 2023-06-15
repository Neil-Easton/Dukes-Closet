import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
    const {product} = useContext(ProductContext);

    return (
        <div className="item-list">
        {product.map((shopItem) => {
            return <ProductCard product={shopItem} key={shopItem.id}/>;
        })}
        </div>
    )
}

export default Shop;