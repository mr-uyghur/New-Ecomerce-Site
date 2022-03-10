import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//this action is resposible for adding Items to the cart
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
  });

//this action removes items from the cart
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

//this action is for removing the item quatity from the checkout pages
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});