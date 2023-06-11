import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const { data: instructors = [], isLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/instructors`);
            return res.data;
        }
    })
    
    return (
        <div className="bg-emerald-50">
            <div className="hero min-h-[400px] bg-[url('https://i.ibb.co/68vRmpJ/instructors.jpg')] bg-center" style={{ backgroundPosition: 'center 30%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="w-fit mx-auto mb-5 text-5xl font-bold text-warning bg-black bg-opacity-30 py-3 px-6 rounded-lg">
                            Instructors
                        </h1>
                        <p className="mb-5 text-white text-xl font-medium bg-black bg-opacity-30 py-3 px-6 rounded-lg capitalize">
                            We have the best instructors teaching students in the summer heats!
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-24 flex justify-center items-center flex-wrap gap-14">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor._id} instructor={instructor}
                    >
                    </Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;