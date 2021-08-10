import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //modify component to use redux
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
//import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

/* import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component"; */
import { HeaderContainer, OptionsContainer, OptionLink, LogoImg } from "./header.styles";

const Header = ({ currentUser/* , hidden */ }) => (
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

//state.user.currentUser === rooot-reducer.user.currentUser
//createdStructuredSelector will match the states authomatically
const mapStateToProps = createStructuredSelector({
  //state or {user: {currentUser}, cart: {hidden}}
  currentUser: selectCurrentUser,
  //hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
