import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../../../contexts/categories.context";

import { CategoryStyled, ProductContainer } from "./category.styles.jsx";
import ProductCard from "../../../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CategoryStyled>
      <h1>{category}</h1>
      <ProductContainer>
        {categoriesMap[category] &&
          categoriesMap[category].items.map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
      </ProductContainer>
    </CategoryStyled>
  );
};

export default Category;
