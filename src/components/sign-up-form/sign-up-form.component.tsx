import React, { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";

import {SignUpContainerStyledDiv} from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    dispatch(signUp(email, password, displayName));

    resetFormFields();
    navigate('/');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({
        ...formFields, [name]: value
    })
  }

  return (
    <SignUpContainerStyledDiv>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

        <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <Button label="Sign up"/>

      </form>
    </SignUpContainerStyledDiv>
  );
};

export default SignUpForm;
