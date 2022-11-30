import React, { useEffect, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

const CheckOutForm = ({booking}) => {
    const [cardError , setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {price}  = booking;

//  useEffect(() => {
//     fetch('http://localhost:5000/create-payment-intent', {
//         method: 'POST',
//         headers: {
//             'content-Type': 'application/json',
//             authorization: `bearer ${localStorage.getItem('accessToken')}`
//         },
//         body: JSON.stringify({price}),
//     })
//     .then(res => res.json())
//     .then(data => setClientSecret(data.clientSecret))
//  },[price])
   

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card

        });
        if(error){
            console.log(error);
            setCardError(error.message)
        }
        else{
            setCardError('')
        }



    }
    return (
      <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button 
            className='btn btn-sm btn-success mt-4'
             type="submit" disabled={!stripe }>
                Pay
            </button>
        </form>
        <p className="text-red-500">{cardError}</p>
      </>
    );
};

export default CheckOutForm;