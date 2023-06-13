import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

            <h2 className="text-center font-bold text-3xl uppercase mb-20">Popular Instructors</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-14">
                {
                    popularInstructors.map(popularInstructor => <div
                        key={popularInstructor._id}
                        className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img src={popularInstructor.profile} alt="Popular Class" className="w-full h-[260px] lg:h-[288px] object-cover" />
                        </figure>
                        <div className="card-body my-4 space-y-3 items-center">
                            <h2 className="card-title">Name: {popularInstructor.name}</h2>
                            <p className="font-medium text-base">Email {popularInstructor.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;