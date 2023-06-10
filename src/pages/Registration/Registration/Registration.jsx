import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import loginImg from '../../../assets/images/login.jpg';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const Registration = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

    const { createUser, updateUserProfile, logOut } = useAuth();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password === data.confirm) {
            createUser(data.email, data.password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser);

                    updateUserProfile(data.name, data.photo)
                        .then(() => {
                            const savedUser = { name: data.name, email: data.email, role: 'student', profile: data.photo };
                            // console.log(savedUser);
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(savedUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            title: 'User created successfully...',
                                            showClass: {
                                                popup: 'animate__animated animate__fadeInDown'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOutUp'
                                            }
                                        })
                                        logOut()
                                            .then(() => {
                                                navigate('/login');
                                            })
                                            .catch(error => console.log(error));
                                    }
                                })

                        })
                        .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div className="bg-green-50">
            <div className="max-w-6xl mx-auto py-24">
                <div className="w-full flex flex-col lg:flex-row gap-8 bg-white justify-center items-center p-12 shadow-xl rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-1">
                        <h3 className="text-center text-3xl font-semibold">Register!</h3>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Name: </span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered input-info w-full" />
                            {errors.name && <p className="mt-2 text-red-600">Name Field Is Required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">PhotoURL: </span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="Enter photoURL" className="input input-bordered input-info w-full" />
                            {errors.photo && <p className="mt-2 text-red-600">PhotoURL Field Is Required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email: </span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter your email address" className="input input-bordered input-info w-full" />
                            {errors.email && <p className="mt-2 text-red-600">Email Field Is Required!</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Password: </span>
                            </label>
                            <div className="join items-center relative">
                                <input type={isPasswordHidden ? "password" : "text"} {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} placeholder="Enter your password" className="input input-bordered input-info w-full" />
                                <span onClick={() => setIsPasswordHidden(!isPasswordHidden)} className="text-2xl absolute right-5">
                                    {isPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password?.type === "required" && <p className="mt-2 text-red-600">Password Field Is Required!</p>}
                            {errors.password?.type === "minLength" && <p className="mt-2 text-red-600">Password Must Contain 6 or more Characters!</p>}
                            {errors.password?.type === "pattern" && <p className="mt-2 text-red-600">Password Must Contain One Uppercase Character And One Special Character (!,@,#,$,&,*)</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Confirm Password: </span>
                            </label>
                            <div className="join items-center relative">
                                <input type={isConfirmPasswordHidden ? "password" : "text"} {...register("confirm", { required: true, validate: () => watch('password') === watch('confirm') })} placeholder="Enter your confirm password" className="input input-bordered input-info w-full" />
                                <span onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)} className="text-2xl absolute right-5">
                                    {isConfirmPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.confirm?.type === 'required' && <p className="mt-2 text-red-600">Confirm Password Field Is Required!</p>}
                            {errors.confirm?.type === 'validate' && <p className="mt-2 text-red-600">Password And Confirm Password Doesn't Match!</p>}
                        </div>
                        <div className="text-center pt-4">
                            <input type="submit" value="Register" className="w-full btn bg-green-600 hover:bg-green-700 text-white font-semibold" />
                        </div>
                        <div className="divider py-6">OR</div>
                        {/* <SocialLogin></SocialLogin> */}
                        <p className="text-center py-2 text-lg">
                            Already Have An Account?
                            <Link to="/login" className="text-blue-500 font-medium ms-2">Login.</Link>
                        </p>
                    </form>
                    <div className="w-1/2 border-t-4 lg:border-l-4 lg:border-t-0">
                        <img src={loginImg} alt="Login Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;