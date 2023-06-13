import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response);
  };

  const setDefaultFormField = () => {
    setFormField(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await signInUserWithEmailAndPassword(email, password);

    // console.log(response);
    // auth/user-not-found

    try {

        const response = await signInUserWithEmailAndPassword(email, password);

        console.log(response);

    } catch (err) {
        switch(err.code) {
            case "auth/wrong-password": 
                alert("Wrong account or password");
                break;
            case "auth/user-not-found":
                alert("Wrong account or password");
                break;
            default:
                alert("Error logging in user");
        }
        console.log(err);
    } 

    setDefaultFormField();
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <div style={{ display: "flex", gap: "15px" }}>
          <Button type="submit" label="Sign in" />
          <Button
            type="button"
            label="Sign in with Google"
            onClick={logGoogleUser}
            className="button-container google-sign-in"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
