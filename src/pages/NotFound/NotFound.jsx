import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/404.jpg';
import useTitle from '../../hooks/useTitle';

const NotFound = () => {
    useTitle('404');

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center h-screen">
            <div className="w-1/2 mb-10 lg:mb-0">
                <img
                    src={errorImg}
                    alt="404 Error"
                    className="w-full"
                />
            </div>
            <div className="w-1/2 text-center">
                <h1 className="text-5xl text-stone-400 font-bold mb-4">404!</h1>
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-gray-600 text-lg mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link to="/">
                    <button className="btn btn-warning px-6 py-2 rounded-lg">
                        Go Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;