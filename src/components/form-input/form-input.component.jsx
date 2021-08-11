import React from "react";

//Reusing styled components
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';

  //component used for Forms input either in the sign in or sign out component
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

//by exporting, it allows this component to be called from another components
export default FormInput;
