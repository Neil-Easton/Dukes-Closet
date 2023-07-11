import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";
import { User, } from "firebase/auth";
import { signInFailed, signInSuccess, signOut } from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";
import { act } from "react-dom/test-utils";

export type UserState = {
    readonly currentUser: null | UserData;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state: UserState = INITIAL_STATE, action: AnyAction): UserState => {

    if (signInSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload
        }        
    }
    else if (signInFailed.match(action)) {
        return {
            ...state,
            error: action.payload
        }        
    }
    else if (signOut.match(action)) {
        return {
            ...state,
            currentUser: null
        }        
    }

    return state;

    // const {type, payload} = action;

    // switch(type) {
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser: payload
    //         }
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //         return {
    //             ...state,
    //             error: payload
    //         }
    //     case USER_ACTION_TYPES.SIGN_OUT:
    //         return {
    //             ...state,
    //             currentUser: null
    //         }
    //     default:
    //         return state;
    // }
}