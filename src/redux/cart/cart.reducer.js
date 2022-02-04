//initiate a boolean state and use the value of that state to determine
//weather to render the cart dropdown or not.
import CartActionTypes from './cart.types'
const INITIAL_STATE = {
    hidden: true,
    //items added to the shopping cart list will
    //be added to this arr in cart reducer
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            /*---------------------------------------------------------------------*/
            //this block of code is resposible for adding items into the shopping cart list
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                CartItems:[...state.cartItems,action.payload]
            }
            /*------------------------------------------------------------------- */
        default:
            return state
    }
}

export default cartReducer;