import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
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

  return (
    <div style={{display: 'flex', justifyContent: "space-evenly"}}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
