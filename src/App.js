import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import StripeButton from './components/stripe-button/stripe.componenmts'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import Ourmenu from './pages/ourmenu/ourmenu.component'
import Footer from './components/footer/footer.component'
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'
import { SignUpProvider } from './provider/signinSignout.provider'
import CheckOut from './pages/checkout/checkout.components'

import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    let unsubcribeFromAuth = null

    unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })

    return () => {
      unsubcribeFromAuth()
    }
  }, [setCurrentUser])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={Ourmenu} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignUpProvider>
                <SignInSignOut />
              </SignUpProvider>
            )
          }
        />
        <Route path="/checkout" component={CheckOut} />
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
