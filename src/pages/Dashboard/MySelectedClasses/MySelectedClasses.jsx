import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    });

    const handleDelete = selectedClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${selectedClass._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${selectedClass.className} class has been deleted.`,
                                'success'
                            );
                        }
                    })
            }
        })
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
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((selectedClass, index) => <tr
                                key={selectedClass._id} className="border-2 text-base font-medium"
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={selectedClass.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {selectedClass.className}
                                </td>
                                <td>
                                    {selectedClass.instructorName}
                                </td>
                                <td>
                                    {selectedClass.price}
                                </td>
                                <th>
                                    <div className="flex justify-center gap-5">
                                        <button onClick={() => handleDelete(selectedClass)} className="btn btn-warning btn-sm">
                                            Delete
                                        </button>
                                        <button onClick={() => handlePayment(selectedClass)} className="btn btn-success btn-sm">
                                            Pay
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

export default MySelectedClasses;