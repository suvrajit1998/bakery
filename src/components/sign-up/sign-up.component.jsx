import React, { useState, useContext } from 'react'

import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButoon from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { SignUpContext } from '../../provider/signinSignout.provider'

const SignUp = () => {
  const { toggleHiddne } = useContext(SignUpContext)
  const [userdetails, setuserdetails] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const { displayName, email, password, confirmpassword } = userdetails

  const handlesubmit = async e => {
    e.preventDefault()

    if (password !== confirmpassword) {
      alert("Password Dont't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })
      setuserdetails({
        displayName: '',
        email: '',
        password: '',
        confirmpassword: ''
      })
    } catch (ex) {
      console.log(ex)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target

    setuserdetails({ ...userdetails, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I have not a account</h2>
      <span className="subtitle">Sign up with your email and password</span>
      <CustomButoon onClick={toggleHiddne}>Sign In ?</CustomButoon>
      <form className="sign-up-form" onSubmit={handlesubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButoon type="submit">Sign Up</CustomButoon>
      </form>
    </div>
  )
}

export default SignUp
