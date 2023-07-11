import {createSelector} from 'reselect';
import { CategoriesState } from './category.reducer';
import { Category, CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategory = (state: RootState): CategoriesState => {
    return state.category;
}

const selectCategoriesArray = (state: RootState): Category[] => {
    // console.log("selector 1 fired");
    return state.category.categoriesArray;
};

export const selectCategoriesMap = createSelector(
    [selectCategoriesArray],
    (categoriesArray): CategoryMap => {
        console.log("reduce function fired");

        return categoriesArray.reduce((acc, singleCategory) => {
            const {title, items} = singleCategory;
            acc[title.toLowerCase()] = {title: title, items: items};
            return acc;
        }, {} as CategoryMap)
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategory],
    (category) => {
        return category.isLoading;
    }
)

// export const selectCategoriesIsLoading = (state) => {
//     return state.category.isLoading;
// }