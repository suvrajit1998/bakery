import React from 'react'
import { connect } from 'react-redux'

import './card-dropdown.style.scss'
import CartItem from '../cart-items/cart-item.component'

import CustomButoon from '../custom-button/custom-button.component'

const CardDropdown = ({ cartItems }) => {
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
      <CustomButoon>CheckOut</CustomButoon>
    </div>
  )
}

const mapStateToProps = ({ card: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CardDropdown)
