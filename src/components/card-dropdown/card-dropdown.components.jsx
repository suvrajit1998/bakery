import React from 'react'

import './card-dropdown.style.scss'

import CustomButoon from '../custom-button/custom-button.component'

const CardDropdown = () => {
  return (
    <div className="card-dropdown">
      <div className="card-item"></div>
      <CustomButoon>CheckOut</CustomButoon>
    </div>
  )
}

export default CardDropdown
