import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// import './CheckoutForm.css';

const CheckoutForm = ({ classInfo, price, selectedClassId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price) {
            // console.log(price);
            axiosSecure.post('/create-payment-intent', {
                price
            })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('paymentMethod', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('paymentIntent', paymentIntent);
        setProcessing(false);

        if(paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                classId: classInfo.classId,
                className: classInfo.className
            }

            // console.log(payment);
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId) {
                    console.log('inserted into the payment history');
                    axiosSecure.delete(`/carts/${selectedClassId}`)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.deletedCount > 0) {
                            console.log('deleted from the selected class');
                        }
                    })
                }
            })
        }
    };

    return (
        <>
            <form className="w-2/3" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-warning btn-sm mt-4" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-4">{cardError}</p>}
            {transactionId && <p className="text-green-500 mt-4">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;