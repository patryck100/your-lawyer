import React from "react";
import {
  CartContainer,
  CaseIcon,
  ItemCountContainer
} from './cart-icon.styles';

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";


const CartIcon = ({ toggleCartHidden, itemCount, currentUser }) => (
  currentUser ? //if the user is logged in, displays the cart, otherwise display null
  (<CartContainer onClick={ toggleCartHidden}>
    <CaseIcon />
    <ItemCountContainer>{itemCount/* display the quantity of items in the cart */}</ItemCountContainer>
  </CartContainer>) :
  (null)
);

//this triggers the toggleCart to hidden or unhidden
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({ /* state or {cart: { cartItems }} */
  itemCount: selectCartItemsCount, //calls the function from "cart.selectors.js"
  currentUser: selectCurrentUser
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
