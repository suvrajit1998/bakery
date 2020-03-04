import React, { useState } from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButoon from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

const SingIn = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' })
  const { email, password } = userDetails

  const onHandleChange = e => {
    const { value, name } = e.target

    setUserDetails({ ...userDetails, [name]: value })
  }

  const onHandleSubmit = async e => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setUserDetails({ email: '', password: '' })
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div className="sign-in">
      <h2 className="title">I already have an Account</h2>
      <span>Sign in with your email and password</span>
      <form className="form" onSubmit={onHandleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={onHandleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={onHandleChange}
          required
        />
        <div className="button">
          <CustomButoon type="submit"> Sign In </CustomButoon>
          <CustomButoon onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButoon>
        </div>
      </form>
    </div>
  )
}

export default SingIn
