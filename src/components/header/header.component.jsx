import React from "react";

//Redirects to a path when clicked on a Link
import { Link } from "react-router-dom";

//connects with redux, allowing to use structured selectors
import { connect } from "react-redux";
//Creates an structure to send or request state from Redux
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
//Function from firebase used to sign in or out in the app
import { auth } from "../../firebase/firebase.utils";

//Reusing styled components
import { HeaderContainer, OptionsContainer, OptionLink, LogoImg } from "./header.styles";

const Header = ({ currentUser }) => (
  //creating a div to contain the logo, and another sub div options with shop and contact
  <HeaderContainer>
    <Link to="/">
      <LogoImg />
    </Link>

    <OptionsContainer>
      {currentUser ? ( //gives the user the option to sign out in case he/she is sign in already
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        //otherwise it points to the page to sign in
        <OptionLink to="/signin">
          SIGN IN / REGISTER
        </OptionLink>
      )}
      <OptionLink to="/signin">
        CONTACT
      </OptionLink>
      {currentUser ? ( //if user is logged in, gives the option to access the enquiries page
        <OptionLink to="/mycases">
          ENQUIRIES
        </OptionLink>
      ) : null}
    </OptionsContainer>
  </HeaderContainer>
);

//Gets the current state of the user from Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//by exporting, it allows this component to be called from another components
export default connect(mapStateToProps)(Header);
