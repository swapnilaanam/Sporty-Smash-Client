import { useForm } from "react-hook-form";
import loginImg from '../../../assets/images/login.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-green-50">
            <div className="max-w-4xl mx-auto py-24">
                <div className="w-full flex flex-col lg:flex-row gap-8 bg-white justify-center items-center p-12 shadow-xl rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-2">
                        <h3 className="text-center text-3xl font-semibold">Login!</h3>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email: </span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter your email address" className="input input-bordered input-info w-full" />
                            {errors.email && <p>Email Field Is Required!</p>}
                        </div>
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
                        <div className="text-center pt-4">
                            <input type="submit" value="Login" className="btn bg-green-600 hover:bg-green-700 px-10 py-4 text-white font-semibold" />
                        </div>
                        <div className="divider py-6">OR</div>
                        <SocialLogin></SocialLogin>
                        <p className="text-center py-2 text-lg">
                            Don't Have An Account?
                            <Link to="/register" className="text-blue-500 font-medium ms-2">Register.</Link>
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

export default Login;