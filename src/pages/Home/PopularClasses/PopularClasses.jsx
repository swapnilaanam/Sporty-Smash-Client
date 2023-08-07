import Lottie from "lottie-react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import underlineAnimation from '../../../assets/animation/underline-animation.json';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularClasses = () => {

    const { data: popularClasses = [] } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await axios.get('https://summer-camp-school-server-lime.vercel.app/classes/popular');
            // console.log(res.data);
            return res.data;
        }
    });

    return (
        <div className="pt-28 pb-36 bg-yellow-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 flex flex-col md:flex-row justify-center md:justify-between items-center">
                    <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide">
                        Our Popular
                        <span className="">
                            <span className="text-green-600 relative ms-4">
                                Classes
                                <span className="absolute top-7 start-0">
                                    <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                                </span>
                            </span>
                        </span>
                    </h2>
                    <Link to="/classes" className="mt-6 md:mt-0">
                        <h4 className="text-xl font-semibold text-blue-600 flex justify-center items-center gap-1">
                            <span>See More</span>
                            <MdOutlineKeyboardDoubleArrowRight className="text-3xl mt-0.5" />
                        </h4>
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-14 overflow-hidden">
                    {
                        popularClasses.map(popularClass => <motion.div
                            key={popularClass._id}
                            initial={{ transform: "translateX(-200px)" }}
                            whileInView={{ transform: "translateX(0px)" }}
                            transition={{ duration: 1.5 }}
                        >
                            <div
                                className="card card-compact w-72 lg:w-[350px] lg:min-h-[475px] bg-base-100 shadow-xl rounded-md"
                            >
                                <figure>
                                    <img src={popularClass.classImage} alt="Popular Class" className="w-full h-[200px] lg:h-[200px] object-cover" />
                                </figure>
                                <div className="card-body my-1">
                                    <h2 className="card-title text-base font-semibold">{popularClass.className}</h2>
                                    <p className="font-medium text-base">Instructor Name: {popularClass.instructorName}</p>
                                    <p className="font-medium text-base">
                                        Total Enrolled Students:
                                        <span className="badge badge-warning ms-3 px-5 font-medium text-xl py-4">
                                            {popularClass.totalEnrolledStudents}
                                        </span>
                                    </p>
                                    <p className="font-medium text-base">
                                        Available Seats:
                                        <span className="badge badge-neutral ms-3 px-5 py-4 text-white font-medium text-xl">
                                            {popularClass.availableSeats}
                                        </span>
                                    </p>
                                    <p className="font-medium text-base">
                                        Price:
                                        <span className="badge badge-success ms-3 px-5 py-4 text-xl font-medium">${popularClass.price}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;