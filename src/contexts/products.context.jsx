import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
    product: null,
    setProduct: () => {}
});

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState(PRODUCTS);
    const value = {product, setProduct};

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
};

