import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const PopularInstructors = () => {

    const { data: popularInstructors = [] } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/users/instructors/popular');
            // console.log(res.data);
            return res.data;
        }
    });

    return (
        <div className="py-24 px-4">

            <h2 className="text-center font-bold text-3xl uppercase mb-20">--- Popular Instructors ---</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-14">
                {
                    popularInstructors.map(popularInstructor => <motion.div
                        key={popularInstructor._id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 2.5 }}
                    >
                        <div
                            className="card card-compact w-96 bg-base-100 shadow-xl"
                        >
                            <figure>
                                <img src={popularInstructor.profile} alt="Popular Class" className="w-full h-[288px] object-cover" />
                            </figure>
                            <div className="card-body my-4 space-y-3 items-center">
                                <h2 className="card-title">Name: {popularInstructor.name}</h2>
                                <p className="font-medium text-base">Email {popularInstructor.email}</p>
                            </div>
                        </div>
                    </motion.div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;