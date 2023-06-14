import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import './CheckoutForm.css';

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
        if (price && price > 0) {
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

    useEffect(() => {
        if (!selectedClassId) {
            console.log('Hello');
            const { id } = useParams();
            selectedClassId = id;
        }
    }, []);

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

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classId: classInfo.classId,
                className: classInfo.className
            }

            // console.log(payment);
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        // console.log('inserted into the payment history');
                        axiosSecure.delete(`/carts/${selectedClassId}`)
                            .then(res => {
                                // console.log(res.data);
                                if (res.data.deletedCount > 0) {
                                    // console.log('deleted from the selected class');
                                    const { classId, className, classImage, instructorName, instructorEmail, price, studentName, studentEmail } = classInfo;

                                    const enrolledClass = { classId, className, classImage, instructorName, instructorEmail, price, studentName, studentEmail, paymentTransactionId: paymentIntent.id };

                                    // console.log(enrolledClass);

                                    axiosSecure.post('/enrolledclasses', enrolledClass)
                                        .then(res => {
                                            // console.log(res.data);
                                            if (res.data.insertedId) {
                                                // console.log('inserted into the enrolled classes....');
                                                axiosSecure.patch(`/classes/enrolled/${classInfo.classId}`)
                                                    .then(res => {
                                                        // console.log(res.data);
                                                        if (res.data.modifiedCount > 0) {
                                                            Swal.fire({
                                                                position: 'top-end',
                                                                icon: 'success',
                                                                title: `Payment Successful! You are now enrolled into ${enrolledClass.className}`,
                                                                showConfirmButton: false,
                                                                timer: 2500
                                                            });
                                                        }
                                                    })
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    };

    return (
        <div className="w-[500px] mx-auto checkoutform">
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
                <button type="submit" className="btn btn-warning btn-sm mt-4 w-full h-8 font-semibold text-lg" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-4">{cardError}</p>}
            {transactionId && <p className="text-green-500 mt-4">Transaction complete with transactionId: {transactionId} (Wait few seconds for confirmation sweet alert)</p>}
        </div>
    );
};

export default CheckoutForm;