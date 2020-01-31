import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/baker.svg'
import CardIcon from '../dropdown-icon/dropdown-icon.components'

import './header.style.scss'

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <Logo className="logo-img" />
        <span className="brand">Baker's</span>
      </Link>
      <div className="options">
        <Link className="option" to="/menu">
          Our Menu
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        <Link className="option" to="/sign-in">
          Sign In
        </Link>
        <CardIcon />
      </div>
    </div>
  )
}

export default Header
