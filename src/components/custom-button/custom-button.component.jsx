import React from 'react';
import './custom-button.styles.scss'

//reuseble custom button component

const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) =>{
 return(
    <button className={`
    ${ inverted ? 'inverted':''}
    ${ isGoogleSignIn ? 'google-sign-in':''} custom-button`}
    {...otherProps}>
    {children}
</button>
 )
}

export default CustomButton