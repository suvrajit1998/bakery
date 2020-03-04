import React from 'react'

import './sign-in-sign-out.style.scss'
import SingIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInSignOut = () => {
  return (
    <div className="sign-in-sign-out">
      <SingIn />
      <SignUp />
    </div>
  )
}

export default SignInSignOut
