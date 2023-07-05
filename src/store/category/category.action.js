import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORY_ACTION_TYPE } from "./category.types"

export const setCategoriesArray = (categoriesArray) => 
    ({type: CATEGORY_ACTION_TYPE.SET_CATEGORIES_ARRAY, payload: categoriesArray});

export const fetchCategoriesStart = () => {
    return {type: CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START};
};

export const fetchCategoriesSuccess = (categoriesArray) => {
    return {type: CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, payload: categoriesArray};
};

export const fetchCategoriesFailed = (error) => {
    return {type: CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED, payload: error};
};