import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/baker.svg'
import CardIcon from '../dropdown-icon/dropdown-icon.components'
import CardDropdown from '../card-dropdown/card-dropdown.components'

import './header.style.scss'

const Header = ({ hiddne }) => {
  // console.log(hiddne)
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
        <Link className="option" to="/signin">
          Sign In
        </Link>
        <CardIcon />
      </div>
      {hiddne ? null : <CardDropdown />}
    </div>
  )
}

const mapStateToProps = ({ card }) => ({
  hiddne: card.hiddne
})

export default connect(mapStateToProps)(Header)
