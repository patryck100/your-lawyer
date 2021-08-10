import styled /*css*/ from "styled-components";
import { Link } from "react-router-dom"; //to use costum components, just import it and put as (prop)


//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/YL.svg";

//css block can be reused in any component. In this case it is being used for link and div
/*const OptionContainerStyles = css`
  //a little padding to leave a space between the options
  padding: 10px 15px;
  cursor: pointer;
`; */

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  //any child inside this component is separeted with as much space as possible
  justify-content: space-between;
  //pushes a margin 25px down to anything below the header
  margin-bottom: 25px;
`;

export const LogoImg = styled(Logo)`
  height: auto;
  width: 90px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  //flex-end means the most right side of the component
  justify-content: flex-end;
`;

//To share duplicated styles, import css from styled-components and use ${RepeatedStyleGoesHere}
/*
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
*/

//or we can create an unique style and use the key word "as=TypeOfComponent"
//e.g OptionLink as="div"
export const OptionLink = styled(Link)`
  //a little padding to leave a space between the options
  padding: 10px 15px;
  cursor: pointer;
`;
