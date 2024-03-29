export const addToCard = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
}

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
