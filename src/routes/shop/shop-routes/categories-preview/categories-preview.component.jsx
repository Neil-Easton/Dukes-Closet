import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../../contexts/categories.context";
import ProductCard from "../../../../components/product-card/product-card.component";
import Spinner from "../../../../components/spinner/spinner.component";
import { useNavigate } from "react-router-dom";

import {
  ItemListStyledDiv,
  LoadMoreCardStyledDiv,
  LoadMoreButtonStyledH1,
} from "./categories-preview.styles.jsx";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../../store/category/category.selector";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const navigate = useNavigate();

  const redirectCategory = (name) => {
    navigate(`/shop/${name}`);
  };

  const displayThumbnail = (products, name) => {
    const thumbnail = [];

    for (let i = 0; i < 4; i++) {
      thumbnail.push(
        <ProductCard product={products[i]} key={products[i].id} />
      );
    }
    thumbnail.push(
      <LoadMoreCardStyledDiv
        key={`${name}+`}
        onClick={() => redirectCategory(name)}
      >
        <LoadMoreButtonStyledH1>&#10513;</LoadMoreButtonStyledH1>
        <span className="promt">Click to load more!</span>
      </LoadMoreCardStyledDiv>
    );

    return thumbnail;
  };

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          return (
            <Fragment key={title}>
              <h2>{title.toUpperCase()}</h2>
              <ItemListStyledDiv>
                {displayThumbnail(categoriesMap[title].items, title)}
              </ItemListStyledDiv>
            </Fragment>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
