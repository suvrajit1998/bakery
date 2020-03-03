import React from 'react'

// import StripeButton from './components/stripe-button/stripe.componenmts'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import Ourmenu from './pages/ourmenu/ourmenu.component'
import Footer from './components/footer/footer.component'
import SingIn from './components/sign-in/sign-in.component'

import { Route, Switch } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={Ourmenu} />
        <Route path="/signin" component={SingIn} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
