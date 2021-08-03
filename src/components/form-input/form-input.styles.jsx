import styled, { css } from "styled-components";
import SelectSpecialization from "../select-option/select-option.component";

//Every time I use "sub-color" it applies the colour grey
//whereas main-color applies black...
const subColor = "grey";
const mainColor = "black";

//Every time that call shrinkLabelStyles, it uses this piece of code in curly brackets
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  //whenever the user selects or focus on an specific input
  //it will target the form-input-label and include the shrinkLabel
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const SelectSpecializationContainer = styled(SelectSpecialization)`
  display: flex;
  flex-direction: column;
  font-family: Open Sans Condensed;
  font-weight: lighter;
  align-items: flex-start;
`;
