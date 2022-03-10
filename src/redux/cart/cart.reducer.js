//initiate a boolean state and use the value of that state to determine
//weather to render the cart dropdown or not.
import CartActionTypes from './cart.types';
import { addItemToCart,removeItemFromCart } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  //items added to the shopping cart list will
  //be added to this arr in cart reducer
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    /*---------------------------------------------------------------------*/
    //this block of code is resposible for adding items into the shopping cart list
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    /*------------------------------------------------------------------- */


    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    //Code below removes the items from the shopping cart list
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
