import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoryStyled, ProductContainer } from "./category.styles.jsx";
import ProductCard from "../../../../components/product-card/product-card.component";
import Spinner from "../../../../components/spinner/spinner.component.jsx";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../../store/category/category.selector.ts";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log("render/re-rendering category component");

  useEffect(() => {
    console.log("Category useEffect fired");
    window.scrollTo(0, 0);
  }, []);

  const loadSpinner = () => {
    return <Spinner />
  }

  return (
    <CategoryStyled>
      <h1>{category}</h1>
      {isLoading ? (
        loadSpinner()
      ) : (
        <ProductContainer>
          {categoriesMap[category] &&
            categoriesMap[category].items.map((item) => {
              return <ProductCard product={item} key={item.id} />;
            })}
        </ProductContainer>
      )}
    </CategoryStyled>
  );
};

export default Category;
