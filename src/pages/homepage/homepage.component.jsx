import React from "react";

import Directory from "../../components/directory/directory.component";

import { Header1 } from "../sign-in-and-sign-up/sign-in-and-sign-up.styles";

import { HomePageContainer } from "./homepage.styles";



const HomePage = () => (
  //calling the component "Directory"
  <HomePageContainer>
    <Header1> Find a Lawyer to solve your case in a few steps</Header1>
    <Directory/>
  </HomePageContainer>
);

export default HomePage;
