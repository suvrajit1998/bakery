import React, { useContext } from 'react'

import './sign-in-sign-out.style.scss'
import SingIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import { SignUpContext } from '../../provider/signinSignout.provider'

const SignInSignOut = () => {
  const { hiddne } = useContext(SignUpContext)

  return (
    <div className="sign-in-sign-out">{hiddne ? <SignUp /> : <SingIn />}</div>
  )
}

export default SignInSignOut
