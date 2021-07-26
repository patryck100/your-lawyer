/*
 *Selectors can compute derived data, allowing Redux to store the minimal possible state.
 *Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
 *Selectors are composable. They can be used as input to other selectors.
 */
/*This is a Memoization technic to avoid that components that are making use of the "selectCart" 
are re-rendered every time the state changes. Basically it sees that the state for the cart didn't change so it
doesn't need to re-render. It helps to improve performance in the overwall web application since it avoid re-renderization */
import { createSelector } from "reselect";

//it gets the whole state and returns only the cart object
const selectCart = (state) => state.cart;

//gets the the cartItems from the cart
export const selectCartItems = createSelector(
  [selectCart], //collection of input selector
  (cart) => cart.cartItems //function that returns the value we want from the selector in the order it was written
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      //sum the quantity of each item in the cart array, starting by 0
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

//calculate total price of the cart
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
