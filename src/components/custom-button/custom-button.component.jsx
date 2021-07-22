import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  //Renders "google-sign-in" if "isGoogleSignIn" is true, otherwise null. Always render "custom-button"
  //renders "inverted" if inverted is true, otherwise null.
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    }
         custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
