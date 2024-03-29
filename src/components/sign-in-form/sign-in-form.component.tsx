import React, { useState, useContext } from "react";
import {
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  // const {setCurrentUser} = useContext(UserContext);
  

  const logGoogleUser = async () => {
    dispatch(googleSignInStart(navigate));

    // console.log(response);
  };

  const setDefaultFormField = () => {
    setFormField(defaultFormFields);
  }

  const handleChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(emailSignInStart(email, password));

    setDefaultFormField();
    navigate('/');
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
            buttonType="google"
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
