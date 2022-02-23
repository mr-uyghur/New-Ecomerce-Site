import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils"
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
    
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
            Contact
        </Link>
        {
          currentUser ? 
          <div className="option" onClick = {() => auth.signOut()}>
            Sign out
          </div>
          :
          <Link className="option" to = '/signin'>
            Sign In
          </Link>
        }
        <CartIcon />
      </div>
      {/* the hidden state is for weather to show the cart drop down or not */}
      { hidden ? null : <CartDropdown/>}
        
    </div>
  );
};

//code below is for getting user info/state from the global redux state
const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);
