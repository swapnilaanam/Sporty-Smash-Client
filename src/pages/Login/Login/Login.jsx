import { useForm } from "react-hook-form";
import loginImg from '../../../assets/images/login.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [error, setError] = useState('');

    const { signIn } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useTitle('Login');

    const onSubmit = data => {
        setError('');
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                reset();
                Swal.fire({
                    title: 'User SignedIn successfully...',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }

    return (
        <div className="bg-green-50 px-4">
            <div className="max-w-5xl mx-auto py-24">
                <div className="w-full flex flex-col md:flex-row gap-8 bg-white justify-center items-center p-12 shadow-xl rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 space-y-2">
                        <h3 className="text-center text-3xl font-semibold">Login!</h3>
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
                                <input type={isPasswordHidden ? "password" : "text"} {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered input-info w-full" />
                                <span onClick={() => setIsPasswordHidden(!isPasswordHidden)} className="text-2xl absolute right-5">
                                    {isPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <p className="mt-2 text-red-600">Password Field Is Required!</p>}
                        </div>
                        <p className="font-medium text-lg text-red-500 mt-1">{error}</p>
                        <div className="text-center pt-4">
                            <input type="submit" value="Login" className="w-full btn bg-green-600 hover:bg-green-700 text-white font-semibold" />
                        </div>
                        <div className="divider py-6">OR</div>
                        <SocialLogin></SocialLogin>
                        <p className="text-center py-2 text-lg">
                            Don't Have An Account?
                            <Link to="/register" className="text-blue-500 font-medium ms-2">Register.</Link>
                        </p>
                    </form>
                    <div className="w-full md:w-1/2 border-t-4 lg:border-l-4 lg:border-t-0">
                        <img src={loginImg} alt="Login Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;