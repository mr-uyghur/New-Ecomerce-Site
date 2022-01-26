import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils"
import {connect} from 'react-redux'

const Header = ({currentUser}) => {
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
      </div>

    </div>
  );
};

const mapStateToProps = (state) =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
