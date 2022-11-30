import { Elements  } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)



const Payment = () => {
    const booking = useLoaderData();
    const { productName, price, } = booking

    return (
        <div>
            <h3 className='text-3xl font-bold text-success mb-5'>Payment for {productName}</h3>
            <p>Please Pay <strong>{price}$</strong> for your device</p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    booking={booking}
                    
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;