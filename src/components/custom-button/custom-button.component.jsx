import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  //Renders "google-sign-in" if "isGoogleSignIn" is true, otherwise null. Always render "custom-button"
  //renders "inverted" if inverted is true, otherwise null.
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

//by exporting, it allows this component to be called from another components
export default CustomButton;
