import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes`);
            return res.data;
        }
    });

    const handleApprove = singleClass => {
        axiosSecure.patch(`/classes/status/${singleClass._id}`, {
            status: 'approved'
        })
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass.className} is Approved Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = singleClass => {
        axiosSecure.patch(`/classes/status/${singleClass._id}`, {
            status: 'denied'
        })
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass.className} is Denied Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    }

    const handleSendFeedback = (e, id) => {
        // console.log(id);
        const feedbackElement = e.target.parentElement.previousElementSibling.firstElementChild;

        const feedback = feedbackElement.value;

        if (feedback === '') {
            let timerInterval;
            Swal.fire({
                title: 'No Feedback is given! Give feedback and try again!',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            });
            return;
        }

        // console.log(feedback);

        axiosSecure.patch(`/classes/feedback/${id}`, {
            feedback: feedback
        })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    feedbackElement.value = '';
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback is given!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    }

    return (
        <div className="w-full px-4 h-full">
            <h2 className="text-black text-3xl font-medium text-center my-12">Manage Classes</h2>
            <div className="overflow-x-auto">
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
                                        <div className="mask mask-squircle w-16 h-16">
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
                                <th>
                                    <div className="flex gap-3">
                                        <button onClick={() => handleApprove(singleClass)} className="btn btn-success  btn-xs" disabled={singleClass.status !== 'pending'}>
                                            Approve
                                        </button>
                                        <button onClick={() => handleDeny(singleClass)} className="btn bg-red-600 hover:bg-red-600 text-white hover:text-white btn-xs" disabled={singleClass.status !== 'pending'}>
                                            Deny
                                        </button>

                                        <label htmlFor={`my_modal_${index + 1}`} className="btn btn-warning btn-xs" disabled={singleClass.status === 'pending'}>Send Feedback</label>

                                        <input type="checkbox" id={`my_modal_${index + 1}`} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <div className="space-y-4">
                                                    <h3 className="font-bold text-lg">Write Your Feedback!</h3>
                                                    <div className="form-control">
                                                        <textarea className='textarea textarea-bordered' placeholder='Write Your Feedback'></textarea>
                                                    </div>
                                                    <div className="form-control">
                                                        <input type="button" onClick={() => handleSendFeedback(event, singleClass._id)} className="btn btn-warning" value="Send FeedBack" />
                                                    </div>
                                                </div>
                                                <div className="modal-action">
                                                    <label htmlFor={`my_modal_${index + 1}`} className="btn bg-red-600 text-white hover:bg-red-600 hover:text-white">Close</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default ManageClasses;