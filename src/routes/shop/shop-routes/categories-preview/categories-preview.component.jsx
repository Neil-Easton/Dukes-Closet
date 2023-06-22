import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../../contexts/categories.context";
import ProductCard from "../../../../components/product-card/product-card.component";
import { useNavigate } from "react-router-dom";

import {ItemListStyledDiv, LoadMoreCardStyledDiv, LoadMoreButtonStyledH1} from "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const navigate = useNavigate();

    const redirectCategory = (name) => {
      navigate(`/shop/${name}`);
    }

    const displayThumbnail = (products, name) => {
      const thumbnail = [];
  
      for (let i = 0; i < 4; i++) {
        thumbnail.push(<ProductCard product={products[i]} key={products[i].id}/>);
      }
      thumbnail.push(
        <LoadMoreCardStyledDiv key={`${name}+`} onClick={() => redirectCategory(name)}>
          <LoadMoreButtonStyledH1>&#10513;</LoadMoreButtonStyledH1>
          <span className="promt">Click to load more!</span>
        </LoadMoreCardStyledDiv>
      )
  
      return thumbnail;
    }
  
    return (
      <Fragment>
        {
          Object.keys(categoriesMap).map((title) => {
            return (
              <Fragment key={title}>
                <h2>{title.toUpperCase()}</h2>
                <ItemListStyledDiv>
                  {displayThumbnail(categoriesMap[title].items, title)}
                </ItemListStyledDiv>
              </Fragment>
            )
          })
        }
      </Fragment>
    );
}

export default CategoriesPreview;