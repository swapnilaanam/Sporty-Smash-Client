import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // an axios instance with base url
    const axiosSecure = axios.create({
        baseURL: 'https://summer-camp-school-server-lime.vercel.app'
    });

    useEffect(() => {
        // an request interceptor to inject authorization headers
        axiosSecure.interceptors.request.use((config) => {
            const accessToken = localStorage.getItem('access-token');

            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });

        // an response interceptor to handle 401 and 403 responses
        axiosSecure.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    logOut()
                        .then(() => {
                            navigate('/login');
                        });
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;