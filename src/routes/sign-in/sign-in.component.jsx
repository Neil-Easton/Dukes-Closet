import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import { Fragment } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const result = async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response);
        }
    }
    result();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response);
  };

  const logGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    // console.log(user);
  };

  return (
    <Fragment>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleUserRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;
