import './cart-icon.styles.scss'
import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'


const CartIcon = () =>{
    return(
        <div className="cart-icon">
            <ShoppingIcon className="cart-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon