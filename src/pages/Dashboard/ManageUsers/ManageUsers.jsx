import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeInstructor = user => {
        axiosSecure.patch(`/users/${user._id}`, {
            role: 'instructor'
        })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error));
    }

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/${user._id}`, {
            role: 'admin'
        })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="w-full px-10 h-full">
            <h2 className="text-black text-3xl font-medium text-center my-12">Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table text-center border-2 table-zebra">
                    <thead className="bg-stone-400 text-black text-base">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id} className="border-2"
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.profile} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <th>
                                    <div className="flex gap-5">
                                        <button onClick={() => handleMakeInstructor(user)} disabled={user.role === 'instructor'} className="btn btn-warning btn-sm">
                                            Make Instructor
                                        </button>
                                        <button onClick={() => handleMakeAdmin(user)} disabled={user.role === 'admin'} className="btn btn-success btn-sm">
                                            Make Admin
                                        </button>
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

export default ManageUsers;