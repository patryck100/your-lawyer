import React from "react";

//reusying Directory component to render the 3 images explaining the steps of the web app
import Directory from "../../components/directory/directory.component";

//reusing styled components to style the homepage
import { Header1 } from "../sign-in-and-sign-up/sign-in-and-sign-up.styles";
import { HomePageContainer } from "./homepage.styles";



const HomePage = () => (
  //calling the component "Directory"
  <HomePageContainer>
    <Header1> Find a Lawyer to solve your case in a few steps</Header1>
    <Directory/>
  </HomePageContainer>
);

//by exporting, it allows this component to be called from another components
export default HomePage;
