import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const MyClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user.email}`);
            return res.data;
        }
    });

    useTitle('My Classes');

    return (
        <div className="w-full px-4 h-full">
            <h2 className="text-black text-3xl font-medium text-center my-12">My Classes</h2>
            <div className="overflow-x-auto mb-10">
                <table className="table table-xs text-center border-2 table-zebra">
                    <thead className="bg-stone-400 text-black text-base">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold">
                        {
                            classes.map((singleClass, index) => <tr
                                key={singleClass._id} className="border-2"
                            >
                                <td className="text-base">
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={singleClass.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base">
                                    {singleClass.className}
                                </td>
                                <td className="text-base">
                                    {singleClass.instructorName}
                                </td>
                                <td className="text-base">
                                    {singleClass.instructorEmail}
                                </td>
                                <td className="text-base">
                                    {singleClass.availableSeats}
                                </td>
                                <td className="text-base">
                                    ${singleClass.price}
                                </td>
                                <td className="text-base">
                                    {singleClass.status}
                                </td>
                                <td className="text-base">
                                    {singleClass.totalEnrolledStudents}
                                </td>
                                <td className="text-base">
                                    {
                                        singleClass.feedback === '' ? 'No Feedback' : <>
                                            {/* <button className="btn btn-neutral text-white" onClick={() => `feedback_modal_${index + 1}`.showModal()}>See Feedback</button>
                                            <dialog id={`feedback_modal_${index + 1}`} className="modal">
                                                <form method="dialog" className="modal-box">
                                                    <h3 className="font-bold text-lg">Feedback!</h3>
                                                    <p className="py-4">{singleClass.feedback}</p>
                                                    <div className="modal-action">
                                                        <button className="btn bg-red-500 text-white">Close</button>
                                                    </div>
                                                </form>
                                            </dialog> */}
                                            <label className="btn btn-neutral text-white" htmlFor={`my_modal_feedback_${index + 1}`}>
                                                See Feedback
                                            </label>

                                            {/* Put this part before </body> tag */}
                                            <input type="checkbox" id={`my_modal_feedback_${index + 1}`} className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">Feedback!</h3>
                                                    <p className="py-4">{singleClass.feedback}</p>
                                                    <div className="modal-action">
                                                        <label htmlFor={`my_modal_feedback_${index + 1}`} className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white">Close</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </td>
                                <th>
                                    <button className="btn btn-warning btn-sm">
                                        Update
                                    </button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;