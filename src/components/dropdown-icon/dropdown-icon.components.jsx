import React from 'react'

import { connect } from 'react-redux'
import { toggleCardHiddne } from '../../redux/card/card.action'

import './dropdown-icon.style.scss'

import { ReactComponent as ShoppingLogo } from '../../assets/11.2 shopping-bag.svg.svg'

const CardIcon = ({ toggleCardHiddne, cartItemsCount }) => {
  // console.log(toggleCardHiddne)
  return (
    <div className="card-icon" onClick={toggleCardHiddne}>
      <ShoppingLogo className="shopping-logo" />
      <span className="item-count"> {cartItemsCount} </span>
    </div>
  )
}

const dispatchToProps = dispatch => ({
  toggleCardHiddne: () => dispatch(toggleCardHiddne())
})

const mapStateToProps = ({ card: { cartItems } }) => ({
  cartItemsCount: cartItems.reduce(
    (aqumulatedQuantity, cartItem) => aqumulatedQuantity + cartItem.quantity,
    0
  )
})

export default connect(mapStateToProps, dispatchToProps)(CardIcon)
