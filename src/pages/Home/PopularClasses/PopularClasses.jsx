import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const PopularClasses = () => {

    const { data: popularClasses = [] } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/classes/popular');
            console.log(res.data);
            return res.data;
        }
    });

    return (
        <div className="py-24 px-4">

            <h2 className="text-center font-bold text-3xl uppercase mb-20">--- Popular Classes ---</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-14">
                {
                    popularClasses.map(popularClass => <motion.div
                        initial={{ opacity: 0, translateX: -150 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1.8 }}
                    >
                        <div
                            key={popularClass._id}
                            className="card card-compact w-96 bg-base-100 shadow-xl"
                        >
                            <figure>
                                <img src={popularClass.classImage} alt="Popular Class" className="w-full h-[288px] object-cover" />
                            </figure>
                            <div className="card-body my-4 space-y-3">
                                <h2 className="card-title">{popularClass.className}</h2>
                                <p className="font-medium text-base">Instructor Name: {popularClass.instructorName}</p>
                                <p className="font-medium text-base">
                                    Total Enrolled Students:
                                    <span className="badge badge-warning badge-lg ms-2 px-5 py-4">
                                        {popularClass.totalEnrolledStudents}
                                    </span>
                                </p>
                                <p className="font-medium text-base">
                                    Available Seats:
                                    <span className="badge badge-neutral badge-lg ms-2 px-5 py-4 text-white">
                                        {popularClass.availableSeats}
                                    </span>
                                </p>
                                <p className="font-medium text-base">
                                    Price:
                                    <span className="badge badge-success badge-lg ms-2 px-5 py-4">${popularClass.price}</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;