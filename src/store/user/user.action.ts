import { UserData } from "../../utils/firebase/firebase.utils";
import { withMatcher } from "../../utils/firebase/reducer.utils";
import { Action, ActionWithPayload } from "../category/category.types";
import { USER_ACTION_TYPES } from "./user.types";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type SignOut = Action<USER_ACTION_TYPES.SIGN_OUT>;
export type SignUp = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP, {email: string, password: string, displayName: string}>;
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export const checkUserSession = withMatcher((): CheckUserSession => {
    return {type: USER_ACTION_TYPES.CHECK_USER_SESSION}
})

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
    return {type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START}
})

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => {
    return {type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: {email, password}};
})

export const signInSuccess = withMatcher((user: UserData): SignInSuccess => {
    return {type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user};
})

export const signInFailed = withMatcher((error: Error): SignInFailed => {
    return {type: USER_ACTION_TYPES.SIGN_IN_FAILED, payload: error};
})

export const signOut = withMatcher((): SignOut => {
    return {type: USER_ACTION_TYPES.SIGN_OUT};
})

export const signUp = withMatcher((email: string, password: string, displayName: string): SignUp => {
    return {type: USER_ACTION_TYPES.SIGN_UP, payload: {email, password, displayName}};
})

export const signUpFailed = withMatcher((error: Error): SignUpFailed => {
    return {type: USER_ACTION_TYPES.SIGN_UP_FAILED, payload: error};
})
