import React from 'react'
import { connect } from 'react-redux'

import './checkout.style.scss'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckOut = ({ cartItems }) => {
  console.log(cartItems)
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartitem => (
        <CheckOutItem key={cartitem.id} cartItem={cartitem} />
      ))}
      <div className="total">
        <span>Total: $102</span>
      </div>
    </div>
  )
}
const mapStateToProps = ({ card: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CheckOut)
