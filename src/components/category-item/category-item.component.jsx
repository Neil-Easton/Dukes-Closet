import { useNavigate } from 'react-router-dom';
import {CategoryContainerStyledDiv, BackgroundImageStyledDiv, CategoryBodyContainerStyledDiv} from './category-item.styles.jsx'

const CategoryItem = ({Category}) => {

    const {id, title, imageUrl} = Category;
    const navigate = useNavigate();

    const redirectCategory = (event) => {
      event.preventDefault();

      navigate(`/shop/${title}`);
    }

    return (
        <CategoryContainerStyledDiv onClick={redirectCategory}>
          <BackgroundImageStyledDiv imageurl={imageUrl}/>
          <CategoryBodyContainerStyledDiv>
            <h2>{title}</h2>
            <p>Shop now!</p>
          </CategoryBodyContainerStyledDiv>
        </CategoryContainerStyledDiv>
      );
}

export default CategoryItem;