import { FC, InputHTMLAttributes } from "react";
import {GroupStyledDiv, FormInputLabelStyledLabel, FormInputStyledInput} from "./form-input.styles";

export type InputProps = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<InputProps> = ({ label, ...otherProps }) => {
  return (
    <GroupStyledDiv>
      <FormInputStyledInput {...otherProps} />
      {label && (
        <FormInputLabelStyledLabel shrink={Boolean(otherProps.value && (typeof otherProps.value === 'string') && otherProps.value.length)}>
          {label}
        </FormInputLabelStyledLabel>
      )}
    </GroupStyledDiv>
  );
};

export default FormInput;
