import React from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './item-menu.style.scss'
import CustomButoon from '../custom-button/custom-button.component'
import { addCartItem } from '../../redux/card/card.action'

toast.configure()

const ItemMenu = ({ item, addItem }) => {
  const { name, imageUrl, price } = item

  const notify = () => {
    toast.info(`${name} Added`, { position: toast.POSITION.TOP_LEFT })
  }
  return (
    <div className="item-menu">
      <div className="image-container">
        <img alt="img" src={imageUrl} className="image" />
      </div>
      <div className="details">
        <h2 className="name"> {name} </h2>
        <span className="price"> $ {price} </span>
        <CustomButoon
          onClick={() => {
            addItem(item)
            notify()
          }}
        >
          Add To Cart
        </CustomButoon>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(ItemMenu)
