import { useQuery } from "@tanstack/react-query";
import SingleClass from "../SingleClass/SingleClass";
import axios from "axios";
import useTitle from "../../../hooks/useTitle";

const Classes = () => {
    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get(`https://summer-camp-school-server-lime.vercel.app/classes/approved`);
            return res.data;
        }
    })

    useTitle('Classes')

    return (
        <div className="bg-emerald-50 pt-16 md:pt-[96px]">
            <div className="hero min-h-[400px] bg-[url('https://i.ibb.co/d470x8z/class-back-min.jpg')] bg-center" style={{ backgroundPosition: 'center 30%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="w-fit mx-auto mb-5 text-5xl font-bold text-warning bg-black bg-opacity-30 py-3 px-12 rounded-lg">
                            Classes
                        </h1>
                        <p className="mb-5 text-white text-xl font-medium bg-black bg-opacity-30 py-3 px-6 rounded-lg capitalize">
                            We have the best short and effective classes for the summer!
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-24 flex justify-center items-center flex-wrap gap-14 px-4 lg:px-0">
                {
                    classes.map(singleClass => <SingleClass
                        key={singleClass._id} singleClass={singleClass}
                    >
                    </SingleClass>)
                }
            </div>
        </div>
    );
};

export default Classes;