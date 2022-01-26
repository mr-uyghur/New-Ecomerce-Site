import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {connect} from 'react-redux';
import Header from './components/header/header.component'
import "./App.css";
import {  Routes, Route} from "react-router-dom";
import {auth,createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'

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
      
      setCurrentUser({userAuth})
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
      <Route path="/signin" element={<SignInAndSignUpPage/>} />
    </Routes>
  </div>
  )
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
