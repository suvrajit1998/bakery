import { addToCard, removeItem } from './card.utils.js'

const INITAIL_STATE = {
  hiddne: true,
  cartItems: []
}

const cardReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CARD_HIDDNE':
      return {
        ...state,
        hiddne: !state.hiddne
      }
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addToCard(state.cartItems, action.payload)
      }
    case 'CLEAR_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cardReducer
