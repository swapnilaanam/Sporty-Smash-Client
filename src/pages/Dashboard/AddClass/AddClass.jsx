import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.classImage[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const { className, availableSeats, price } = data;
                    const newClass = { className, classImage: imgURL, instructorName: user?.displayName, instructorEmail: user?.email, availableSeats: parseInt(availableSeats), price: parseFloat(price), status: 'pending', totalEnrolledStudents: 0, feedback: '' };
                    // console.log(newClass);

                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            // console.log(data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'A new class is added/created...',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                        .catch(error => console.log(error));
                }
            })
    }

    return (
        <div className="w-full px-10 h-full bg-emerald-50">
            <h2 className="text-black text-3xl font-medium text-center my-10">Add A Class</h2>
            <div className="max-w-4xl mx-auto shadow-lg rounded-sm border-black p-12 mb-24 bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Class Name: </span>
                        </label>
                        <input type="text" {...register("className", { required: true })} placeholder="Enter your class name" className="input input-bordered input-info w-full" />
                        {errors.className && <p className="mt-2 text-red-600">Class Name Field Is Required!</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Image: </span>
                        </label>
                        <input type="file" {...register("classImage", { required: true })} className="file-input file-input-bordered w-full" />
                        {errors.classImage && <p className="mt-2 text-red-600">Class Image Is Required!</p>}
                    </div>
                    <div className="flex gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Instructor Name: </span>
                            </label>
                            <input type="text" {...register("instructorName")} placeholder="Enter your instructor name" className="input input-bordered input-info w-full" defaultValue={user?.displayName} style={{ backgroundColor: 'lightgray' }} disabled />
                            {/* {errors.instructorName && <p className="mt-2 text-red-600">Instructor Name Field Is Required!</p>} */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Instructor Email: </span>
                            </label>
                            <input type="email" {...register("instructorEmail")} placeholder="Enter your instructor email" className="input input-bordered input-info w-full" defaultValue={user?.email} style={{ backgroundColor: 'lightgray' }} disabled />
                            {/* {errors.instructorEmail && <p className="mt-2 text-red-600">Instructor Email Field Is Required!</p>} */}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Available Seats: </span>
                            </label>
                            <input type="number" {...register("availableSeats", { required: true })} placeholder="Enter your available seats" className="input input-bordered input-info w-full" />
                            {errors.availableSeats && <p className="mt-2 text-red-600">Available Seats Field Is Required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Price: </span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Enter your price" className="input input-bordered input-info w-full" />
                            {errors.price && <p className="mt-2 text-red-600">Price Field Is Required!</p>}
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <input type="submit" value="Add Class" className="w-full btn bg-green-600 hover:bg-green-700 text-white font-semibold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;