import React from "react";
import "./cart-icon.styles.scss";
//import { connect } from "react-redux";

/*import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";*/

import { ReactComponent as ShoppingIcon } from "../../assets/case.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{ 13/*itemCount display the quantity of items in the cart */}</span>
  </div>
);

//this triggers the toggleCart to hidden or unhidden
/*const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});*/

//const mapStateToProps = createStructuredSelector({ /* state or {cart: { cartItems }} */
  //itemCount: selectCartItemsCount //calls the function from "cart.selectors.js"
  //which sum the quantity of each item in the cart array, starting by 0
  /*or 
  cartItems.reduce( 
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),*/
//}); 

export default /*connect(mapStateToProps, mapDispatchToProps)*/(CartIcon);
