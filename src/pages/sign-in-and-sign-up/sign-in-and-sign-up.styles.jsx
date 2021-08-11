import  styled, {css } from "styled-components";
import Select from "react-select";

export const HeaderContainer = css`
  font-size: 50px;
  font-weight: lighter;
  justify-content: center;
  text-align: center;
`;

export const TypeOfUserContainer = styled.div`
  max-width: 750px;
  font-size: medium;
  font-style: italic;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto; //keep the component at the center
  margin-bottom: 40px;
`;

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px auto;
`;

export const Header1 = styled.h1`
  ${HeaderContainer}
`;

export const Header2 = styled.h2`
  ${HeaderContainer}
  font-size: 30px;
`;

export const SelectContainer = styled(Select)`
  width: 200px;
  margin: auto;
  margin-top: 30px;
  z-index: 100 !important; //fix opacity problem of select dropdown
`;


