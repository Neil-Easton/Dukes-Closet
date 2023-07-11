import { CATEGORY_ACTION_TYPE, Category } from "./category.types";

import { CategoryAction, fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action";
import { AnyAction } from "redux";

export type CategoriesState = {
    readonly categoriesArray: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const CATEGORY_INITIAL_STATE = {
    categoriesArray: [],
    isLoading: false,
    error: null,
};

export const categoryReducer = (state: CategoriesState = CATEGORY_INITIAL_STATE, action: AnyAction): CategoriesState => {

    // const {type, payload} = action;

    if (fetchCategoriesStart.match(action)) {
        return {...state, isLoading: true};
    }
    else if (fetchCategoriesSuccess.match(action)) {
        return {
            ...state,
            categoriesArray: action.payload,
            isLoading: false
        };
    }
    else if (fetchCategoriesFailed.match(action)) {
        return {...state, error: action.payload, isLoading: false};
    }

    return state;
    // switch (action.type) {
    //     case (CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START):
    //         return {...state, isLoading: true};
    //     case (CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS): 
    //         return {
    //             ...state,
    //             categoriesArray: action.payload,
    //             isLoading: false
    //         };
    //     case (CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED):
    //         return {...state, error: action.payload, isLoading: false};
    //     default:
    //         return state;
    // }

}