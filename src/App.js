import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'

import {connect} from 'react-redux';
import "./App.css";
import {  Routes, Route,Navigate } from "react-router-dom";
import {auth,createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

//store the user login info in App state so I can pass them down to other components
class App extends React.Component {
//this block of code make the app be aware of any authentication state changes in the firebase.
//OAuth login. User can login with 3rd part accounts
// -------------------------------------------------------------------------------------------
  unSubscribeFromAuth = null
  //this is auth method we get from Firebase, used for authenticating Signed in users
  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        /* The code recieves user data from the snapShot object in firebase library */
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
//--------------------------------------------------------------------------------------------------

render(){
  return (
    <div>
    <Header  />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route exact path="/checkout" element={<CheckoutPage/>} />
      <Route
    path="signIn"
    element={
        this.props.currentUser ? (
            <Navigate replace to="/" />
        ) : (
            <SignInAndSignUpPage />
        )
    }
/>
    </Routes>
  </div>
  )
}
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
