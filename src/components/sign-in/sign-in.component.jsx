import React, { useState } from 'react'

import './sign-in.style.scss'
import FormInput from '../sign-in/sign-in.component'
import CustomButoon from '../custom-button/custom-button.component'

const SingIn = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' })
  const { email, password } = userDetails

  const onHandleChange = e => {
    const { value, name } = e.target

    setUserDetails({ ...userDetails, [name]: value })
  }
  return (
    <div className="sign-in">
      <h2>I already have an Account</h2>
      <span>Sign in with your email and password</span>
      <form>
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
          <CustomButoon> Sign In With Google</CustomButoon>
        </div>
      </form>
    </div>
  )
}

export default SingIn
