import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

//import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Specialization</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Enquiry</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Specialization</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {
      //goes through the cart items one by one and gets it's name
      cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }

    <TotalContainer>
      <span> TOTAL: ${total /*displays the total price */}</span>
    </TotalContainer>
    <WarningContainer>
     *Please use the following test credit card for payments*
     <br/>
     4242 4242 4242 4242 - Exp: 01/24 - CVV: 123

     </WarningContainer>
    {/* <StripeCheckoutButton price={total}/> */}
  </CheckoutPageContainer>
);

//collects the global state of those items from the reducer
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
