import React from 'react'
import { connect } from 'react-redux'

import './checkout-item.style.scss'
import {
  addCartItem,
  removeItem,
  cleareCardItem
} from '../../redux/card/card.action'

const CheckOutItem = ({
  cartItem,
  addCartItem,
  removeItem,
  cleareCardItem
}) => {
  console.log(cartItem)
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="img" src={imageUrl} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={() => cleareCardItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapdispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  cleareCardItem: item => dispatch(cleareCardItem(item))
})

export default connect(null, mapdispatchToProps)(CheckOutItem)
