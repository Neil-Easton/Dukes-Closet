import {createSelector} from 'reselect';

const selectCategory = (state) => {
    return state.category;
}

const selectCategoriesArray = (state) => {
    // console.log("selector 1 fired");
    return state.category.categoriesArray;
};

export const selectCategoriesMap = createSelector(
    [selectCategoriesArray],
    (categoriesArray) => {
        console.log("reduce function fired");

        return categoriesArray.reduce((acc, singleCategory) => {
            const {title, items} = singleCategory;
            acc[title.toLowerCase()] = {title: title, items: items};
            return acc;
        }, {})
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