import React from "react";
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {
        label ? //if the label exists
        (<FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label /*label is displayed*/} 
        </FormInputLabel>)
        : null //otherwise null
    }
  </GroupContainer>
);


export default FormInput;
