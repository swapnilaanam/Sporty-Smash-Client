import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyEnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledclasses?email=${user?.email}`);
            return res.data;
        }
    });

    return (
        <div className="w-full px-10 h-full">
            <h2 className="text-black text-3xl font-medium text-center my-12">My Selected Classes</h2>
            <div className="overflow-x-auto mb-10">
                <table className="table text-center border-2 table-zebra">
                    <thead className="bg-stone-400 text-black text-base">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((enrolledClass, index) => <tr
                                key={enrolledClass._id} className="border-2 text-base font-medium"
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={enrolledClass.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {enrolledClass.className}
                                </td>
                                <td>
                                    {enrolledClass.instructorName}
                                </td>
                                <td>
                                    {enrolledClass.instructorEmail}
                                </td>
                                <td>
                                    ${enrolledClass.price}
                                </td>
                                <td>
                                    ${enrolledClass.paymentTransactionId}
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

export default MyEnrolledClasses;