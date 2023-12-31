import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SingleClass = ({ singleClass }) => {
    const { _id, className, classImage, instructorName, instructorEmail, availableSeats, price } = singleClass;

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const [isAdmin, setIsAdmin] = useState(false);
    const [isInstructor, setIsInstructor] = useState(false);

    useEffect(() => {
        fetch(`https://summer-camp-school-server-lime.vercel.app/users/admin/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin));

        fetch(`https://summer-camp-school-server-lime.vercel.app/users/instructor/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsInstructor(data.instructor));
    }, [user]);

    const handleSelectedClass = () => {
        const selectedClass = { classId: _id, className, classImage, instructorName, instructorEmail, price, studentName: user?.displayName, studentEmail: user?.email };

        // console.log(selectedClass);

        axiosSecure.post('/carts', {
            selectedClass
        })
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class is selected!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else if (res.data.exist) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={`card card-compact w-96 shadow-xl ${availableSeats === 0 ? 'bg-red-500' : 'bg-base-100'}`}>
            <figure><img src={classImage} alt="instructor" className="w-full h-[288px]" /></figure>
            <div className="card-body my-4 space-y-3">
                <h2 className="card-title">{className}</h2>
                <p className="font-medium text-base">Instructor Name: {instructorName}</p>
                <p className="font-medium text-base">
                    Available Seats:
                    <span className="badge badge-neutral badge-lg ms-2 px-5 py-4 text-white">{availableSeats}</span>
                </p>
                <p className="font-medium text-base">
                    Price:
                    <span className="badge badge-success badge-lg ms-2 px-5 py-4">${price}</span>
                </p>
                <button onClick={handleSelectedClass} className="btn btn-warning font-semibold text-base" disabled={availableSeats === 0 || isAdmin || isInstructor}>Select Class</button>
            </div>
        </div>
    );
};

export default SingleClass;