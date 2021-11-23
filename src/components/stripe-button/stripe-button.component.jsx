import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_PBrGrLnBIxvUs0YQa4tqHGMd00P5MJJjAz';
    // Remember when forking and cloning over projects associated with API's, 
    // means you MUST always use YOUR pulishsable key your account.

    const onToken= token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
    <StripeCheckout 
            label='Pay Now'
            name='ONPOINT Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton; 