import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSocialLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);

                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'student', profile: loggedUser.photoURL };

                fetch('https://summer-camp-school-server-lime.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.insertedId) {
                            console.log('user saved to the data base...');
                        }
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
            })
            .catch(error => console.log(error));
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