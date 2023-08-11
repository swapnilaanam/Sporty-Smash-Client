import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import underlineAnimation from '../../../assets/animation/underline-animation.json';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import './PopularInstructors.css';

const PopularInstructors = () => {

    const { data: popularInstructors = [] } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async () => {
            const res = await axios.get('https://summer-camp-school-server-lime.vercel.app/users/instructors/popular');
            // console.log(res.data);
            return res.data;
        }
    });

    return (
        <div className="pt-28 pb-36 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row text-center md:text-left justify-between items-center">
                    <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide">
                        Our Popular
                        <span className="">
                            <span className="text-green-600 relative ms-4">
                                Instructors
                                <span className="absolute top-7 start-0">
                                    <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                                </span>
                            </span>
                        </span>
                    </h2>
                    <Link to="/instructors" className="mt-5 md:mt-0">
                        <h4 className="text-xl font-semibold text-blue-600 flex justify-center items-center gap-1">
                            <span>See More</span>
                            <MdOutlineKeyboardDoubleArrowRight className="text-3xl mt-0.5" />
                        </h4>
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap pb-10 gap-14">
                    {
                        popularInstructors.map(popularInstructor => <motion.div
                            key={popularInstructor._id}
                            initial={{ transform: "scaleX(0.5)" }}
                            whileInView={{ transform: "scaleX(1)" }}
                            transition={{ duration: 1 }}
                        >
                            <div className="card card-compact w-80 lg:w-[350px] shadow-xl rounded-md instructor-container overflow-hidden">
                                <figure>
                                    <img src={popularInstructor.profile} alt="Popular Class" className="w-full h-[260px] lg:h-[250px] object-cover" />
                                </figure>
                                <div className="card-body p-3 bg-white items-center rounded-b-sm instructor-body">
                                    <h2 className="card-title text-lg">{popularInstructor.name}</h2>
                                    <p className="font-medium text-base">Email {popularInstructor.email}</p>
                                </div>
                            </div>
                        </motion.div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;