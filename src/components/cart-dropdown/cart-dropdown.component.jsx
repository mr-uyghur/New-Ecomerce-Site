import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import { useNavigate } from 'react-router-dom'
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems,dispatch }) => {
  let navigate = useNavigate();
  //toggleCartHidden action hides the dropdown cart menu when user navigates to the checkoutpage
  const handleClick = () => {
    navigate("/checkout");
    dispatch(toggleCartHidden())
  };
  return(
  
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* the code below, cartItems props is destructured data from redux
              it'll render the items in the dropdown for shopping cart
           */}
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty!</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

//this code gets the cart items data from the redux
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
