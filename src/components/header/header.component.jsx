import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //let us modify our component to use redux
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  //creating a div to contain the logo, and another sub div options with shop and contact
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      {currentUser ? ( //gives the user the option to sign out in case he/she is sign in already
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        //otherwise it points to the page to sign in
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

//state.user.currentUser === rooot-reducer.user.currentUser
//createdStructuredSelector will match the states authomatically
const mapStateToProps = createStructuredSelector({
  //state or {user: {currentUser}, cart: {hidden}}
  currentUser: selectCurrentUser,
  //hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
