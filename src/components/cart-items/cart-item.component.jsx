import React from 'react'

import { connect } from 'react-redux'

import './cart-item.style.scss'
import { cleareCardItem } from '../../redux/card/card.action'

const CartItem = ({ items, cleareCartItem }) => {
  const { imageUrl, name, price, quantity } = items
  return (
    <div className="cart-item">
      <img alt="img" src={imageUrl} />
      <div className="details">
        <span className="name"> {name} </span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
      <span onClick={() => cleareCartItem(items)} className="close-logo">
        &#9747;
      </span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  cleareCartItem: items => dispatch(cleareCardItem(items))
})

export default connect(null, mapDispatchToProps)(CartItem)
