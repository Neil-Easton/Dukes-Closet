import {takeLatest, put, all, call} from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInSuccess, signInFailed, setCurrentUser, signUp, signUpFailed } from './user.action';

import { createAuthUserWithEmailAndPassword, getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInUserWithEmailAndPassword, signOutUser } from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails={}) {
    try {
        // console.log('userAuth: ', userAuth);
        const userSnapshot = yield call(createUserDocumentFromAuth, {user: userAuth}, additionalDetails);
        // console.log(userSnapshot);
        // console.log(userSnapshot.data());
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        // console.log('error: ', error);
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {

    try {
        const {user} = yield call(signInWithGooglePopup);
        // console.log(user);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }

}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield call(signInUserWithEmailAndPassword, email, password)
        // console.log(user);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (userAuth) {
            yield call(getSnapshotFromUserAuth, userAuth);
        }
    } catch (error) {
        console.log('error: ', error);
        yield put(signInFailed(error));
    }
}

export function* signOut() {
    try {
        const res = yield call(signOutUser);
        yield put(signOut());
    } catch (error) {
        console.log("Signout failed: ", error);
    }
}

export function* signUpUser({payload: {email, password, displayName}}) {
    try {
        console.log(email);
        const response = yield call(createAuthUserWithEmailAndPassword, email, password);
        const userSnapshot = yield call(createUserDocumentFromAuth, response, {displayName});
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (err) {
        yield put(signUpFailed(err));
        if (err.code === "auth/email-already-in-use") {
            alert('Cannot create user, email already in use');
        }
        else {
            console.log('user creation encountered an error', err);
        }
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOut() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT, signOut);
}

export function* onSignUp() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP, signUpUser);
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignOut), call(onSignUp)]);
}
