import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const handleSocialLogin = {

    }
    
    return (
        <div className="text-center">
            <div onClick={handleSocialLogin} className=" btn btn-neutral text-white flex items-center">
                <FaGoogle /> <span>Login With Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;