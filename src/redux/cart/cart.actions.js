import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

//add items to the cart array
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM, //just informing reducer that this is an ADD_ITEM type, so this action will do...
  payload: item, //in this case the action will pass in an object item as payload, but it could be anything
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
