import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {/* the code below, cartItems props is destructured data from redux
            it'll render the items in the dropdown for shopping cart
         */}
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
 
//this code gets the cart items data from the redux
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });

export default connect(mapStateToProps)(CartDropdown);
