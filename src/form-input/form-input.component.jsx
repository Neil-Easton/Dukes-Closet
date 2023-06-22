import {GroupStyledDiv, FormInputLabelStyledLabel, FormInputStyledInput} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupStyledDiv>
      <FormInputStyledInput {...otherProps} />
      {label && (
        <FormInputLabelStyledLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabelStyledLabel>
      )}
    </GroupStyledDiv>
  );
};

export default FormInput;
