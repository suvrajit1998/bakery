import React from 'react'

// import StripeButton from './components/stripe-button/stripe.componenmts'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import Footer from './components/footer/footer.component'

import { Route, Switch } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
