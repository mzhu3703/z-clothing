import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function CheckoutButton(props){
    const {price} = props;
    const StripePrice = price * 100;
    const publishableKey = 'pk_test_51H0Ts3I5lOiEyPSqswoMREqZewCt0SLkfhA8IsWLOcMItkFlS2IIO0HoH8wOJxobV7HhTisOOfpID7iQFXQVupQK00BUyN4y19'

    const onToken = token => {
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
         label = 'Pay Now'
         name = 'Z Clothing ltd'
         billingAddress
         shippingAddress
         description = {`Your total is ${price}`}
         amount = {StripePrice}
         panelLabel = 'Pay Now'
         token = {onToken}
         stripeKey = {publishableKey}
         />
    )
}

export default CheckoutButton;