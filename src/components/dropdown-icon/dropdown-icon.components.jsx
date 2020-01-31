import React from 'react'

import './dropdown-icon.style.scss'

import { ReactComponent as ShoppingLogo } from '../../assets/11.2 shopping-bag.svg.svg'

const CardIcon = () => {
  return (
    <div className="card-icon">
      <ShoppingLogo className="shopping-logo" />
      <span className="item-count"> 0</span>
    </div>
  )
}

export default CardIcon
