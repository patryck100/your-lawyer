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


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <CaseIcon />
    <ItemCountContainer>{itemCount/* display the quantity of items in the cart */}</ItemCountContainer>
  </CartContainer>
);

//this triggers the toggleCart to hidden or unhidden
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({ /* state or {cart: { cartItems }} */
  itemCount: selectCartItemsCount //calls the function from "cart.selectors.js"
  //which sum the quantity of each item in the cart array, starting by 0
  /*or 
  cartItems.reduce( 
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),*/
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
