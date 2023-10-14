import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../hooks/useTitle';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        }
    });

    useTitle('Payment History');

    const formatDate = (date) => {
        const newDate = new Date(date);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();

        const hour = newDate.getHours();
        const minute = newDate.getMinutes();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        // returning the whole combined date
        return `${formattedDay}/${formattedMonth}/${year} ${hour}:${minute}`;
    };

    return (
        <div className="w-full px-4 md:px-10 h-full">
            <h2 className="text-black text-3xl font-medium text-center my-12">Payment History</h2>
            <div className="w-64 md:w-full overflow-x-auto mb-10">
                <table className="table text-center border-2 table-zebra">
                    <thead className="bg-stone-400 text-black text-base">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr
                                key={payment._id} className="border-2 text-base font-medium"
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {payment.className}
                                </td>
                                <td>
                                    ${payment.price}
                                </td>
                                <td>
                                    {payment.email}
                                </td>
                                <td>
                                    {payment.transactionId}
                                </td>
                                <td>
                                    {formatDate(payment.date)} (DD/MM/YYYY  HH:MM)
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;