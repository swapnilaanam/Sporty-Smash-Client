import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import loginImg from '../../../assets/images/login.jpg';


const Registration = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className="bg-green-50">
            <div className="max-w-7xl mx-auto py-24">
                <div className="w-full flex flex-col lg:flex-row gap-8 bg-white justify-center items-center p-12 shadow-xl rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-2">
                        <h3 className="text-center text-3xl font-semibold">Register!</h3>
                        <div className="flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg">Name: </span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered input-info w-full" />
                                {errors.name && <p>Name Field Is Required!</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg">PhotoURL: </span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Enter photoURL" className="input input-bordered input-info w-full" />
                                {errors.photo && <p>PhotoURL Field Is Required!</p>}
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email: </span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter your email address" className="input input-bordered input-info w-full" />
                            {errors.email && <p>Email Field Is Required!</p>}
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg">Password: </span>
                                </label>
                                <div className="join items-center relative">
                                    <input type={isPasswordHidden ? "password" : "text"} {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered input-info w-full" />
                                    <span onClick={() => setIsPasswordHidden(!isPasswordHidden)} className="text-2xl absolute right-5">
                                        {isPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.password && <p>Password Field Is Required!</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg">Confirm Password: </span>
                                </label>
                                <div className="join items-center relative">
                                    <input type={isConfirmPasswordHidden ? "password" : "text"} {...register("confirm", { required: true })} placeholder="Enter your confirm password" className="input input-bordered input-info w-full" />
                                    <span onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)} className="text-2xl absolute right-5">
                                        {isConfirmPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.confirm && <p>Confirm Password Field Is Required!</p>}
                            </div>
                        </div>
                        <div className="text-center pt-4">
                            <input type="submit" value="Register" className="w-full btn bg-green-600 hover:bg-green-700 text-white font-semibold" />
                        </div>
                        <div className="divider py-6">OR</div>
                        <SocialLogin></SocialLogin>
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