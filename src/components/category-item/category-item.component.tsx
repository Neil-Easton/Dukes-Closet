import { useNavigate } from 'react-router-dom';
import {CategoryContainerStyledDiv, BackgroundImageStyledDiv, CategoryBodyContainerStyledDiv} from './category-item.styles'
import { CategoryItem } from '../../store/category/category.types';
import React from 'react';

const CategoryItemCompo = ({Category}: {Category: {id: number, title: string, imageUrl: string}}) => {

    const {id, title, imageUrl} = Category;
    const navigate = useNavigate();

    const redirectCategory = (event: React.MouseEvent) => {
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

export default CategoryItemCompo;