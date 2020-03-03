import React from 'react'

import { ReactComponent as Logo } from '../../assets/baker.svg'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGooglePlusG
} from 'react-icons/fa'

import './footer.style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <Logo className="logo" />
      <div className="icons">
        <li className="facebook">
          <FaFacebookF />
        </li>
        <li className="twitter">
          <FaTwitter />
        </li>
        <li className="instagram">
          <FaInstagram />
        </li>
        <li className="youtube">
          <FaYoutube />
        </li>
        <li className="google">
          <FaGooglePlusG />
        </li>
      </div>
      <div className="trems">
        <span>About</span>
        <span>Need Help?</span>
        <span>Contact Guide</span>
        <span>Privacy</span>
        <span>join</span>
        <span>Advatising</span>
        <span>Trems&Uses</span>
      </div>
    </div>
  )
}

export default Footer
