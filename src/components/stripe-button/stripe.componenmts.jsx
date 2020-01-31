import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceforstripe = price * 100
  const publishablekey = 'pk_test_T8L4LnOqZ5x1jRXvnuwYivpK00HcPdMVe2'

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful!')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Cake Baker Ltd."
      billingAddress
      shippingAddress
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW6bBE2Y2xqslA3hduBgckyFjcLjB2HI2WPPCCAgTXswbS73TO"
      stripeKey={publishablekey}
      token={onToken}
      amount={priceforstripe}
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
    />
  )
}

export default StripeButton
