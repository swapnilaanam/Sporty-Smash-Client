import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { id } = useParams();
    const [classInfo, setClassInfo] = useState({});
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/carts/${id}`)
            .then(res => {
                // console.log(res.data);
                setClassInfo(res.data);
            })
    }, [id]);

    return (
        <div className="w-full px-10 h-full">
            <h2 className="text-black text-3xl font-medium text-center my-12">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm classInfo={classInfo} price={classInfo.price} selectedClassId={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;