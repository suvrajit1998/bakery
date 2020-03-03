export const toggleCardHiddne = () => ({
  type: 'TOGGLE_CARD_HIDDNE'
})

export const addCartItem = item => ({
  type: 'ADD_ITEM',
  payload: item
})

export const cleareCardItem = item => ({
  type: 'CLEAR_CART_ITEM',
  payload: item
})
