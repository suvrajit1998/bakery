import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './card-dropdown.style.scss'
import CartItem from '../cart-items/cart-item.component'

import CustomButoon from '../custom-button/custom-button.component'
import { toggleCardHiddne } from '../../redux/card/card.action'

const CardDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="card-dropdown">
      <div className="card-item">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} items={cartItem} />
          ))
        ) : (
          <span>Your cart is empty!</span>
        )}
      </div>
      <CustomButoon
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCardHiddne())
        }}
      >
        CheckOut
      </CustomButoon>
    </div>
  )
}

const mapStateToProps = ({ card: { cartItems } }) => ({
  cartItems
})

export default withRouter(connect(mapStateToProps)(CardDropdown))
