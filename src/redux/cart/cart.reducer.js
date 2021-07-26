import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

//the cart dorpdown initial state should be hidden, and if something triggers it, then it should show up
const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

//the state of the dropdown starts with the initial_state
//and based in an action it can change or just keep the way it was
const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //hidden or unhidden the cart on the top right edge of the screen
      return {
        ...state, //spread the state
        hidden: !state.hidden, //if its hidden then unhidden and vice versa
      };
    case CartActionTypes.ADD_ITEM: //add new items to the cart
      return {
        ...state, //spread the state
        cartItems: addItemToCart(state.cartItems, action.payload), //old state of the cartItem + the new object that is just being added
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        //using the current array of cartItems, it returns a new array with only the items that do not match with the id of the item to be removed
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
