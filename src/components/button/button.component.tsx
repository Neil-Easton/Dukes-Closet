import { IStyledComponent } from "styled-components";
import {StandardButton, GoogleSignInButton, InvertedButton} from "./button.styles";
import { ButtonHTMLAttributes, FC } from "react";

export const BUTTON_TYPE_CLASSES = {
  base: StandardButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

const getButton = (buttonType: keyof typeof BUTTON_TYPE_CLASSES = "base"): IStyledComponent<"web", "button", {}, never> => {
  return BUTTON_TYPE_CLASSES[buttonType];
}

export type ButtonProps = {
  label: string,
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ label, buttonType, ...otherProps }) => {
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
