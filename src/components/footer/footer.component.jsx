import React from 'react'

import './footer.style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <li className="facebook">
          <i class="fab fa-facebook-f"></i>
        </li>
        <li className="twitter">
          <i class="fab fa-twitter"></i>
        </li>
        <li className="instagram">
          <i class="fab fa-instagram"></i>
        </li>
        <li className="youtube">
          <i class="fab fa-youtube"></i>
        </li>
        <li className="google">
          <i class="fab fa-google-plus-g"></i>
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
