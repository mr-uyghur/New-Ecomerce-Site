import CartActionTypes from './cart.types'

export const toggleCartHidden =  () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

//this action is resposible for adding Items to the cart
export const addItem = (item) =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})