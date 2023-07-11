import { CATEGORY_ACTION_TYPE, Category } from "./category.types"
import { Action, ActionWithPayload, withMatcher } from "../../utils/firebase/reducer.utils";

export type FetchCategoriesStart = Action<CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesFailed = ActionWithPayload<CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

// export const setCategoriesArray = (categoriesArray) => 
//     ({type: CATEGORY_ACTION_TYPE.SET_CATEGORIES_ARRAY, payload: categoriesArray});

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
    return {type: CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START};
});

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => {
    return {type: CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, payload: categoriesArray};
});

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => {
    return {type: CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED, payload: error};
});