import {StandardButton, GoogleSignInButton, InvertedButton} from "./button.styles.jsx";

const BUTTON_TYPE_CLASSES = {
  base: StandardButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

const getButton = (buttonType = "base") => {
  return BUTTON_TYPE_CLASSES[buttonType];
}

const Button = ({ label, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton
      {...otherProps}
    >
      {label}
    </CustomButton>
  );
};

export default Button;
