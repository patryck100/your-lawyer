import React from "react";
import { connect } from "react-redux";
//wrap connect and take its arguments, give access to history
import { withRouter } from "react-router-dom";


import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {/*cartItems.length ? ( //if the cartItems array has a length greater than 0, show the items
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        //otherwise show empty-message
        <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
      )*/}
      <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden()); //when click on go to checkout, it changes the state of the cart-dropwdown to hidden
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  //{ cart: { cartItems } }
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
