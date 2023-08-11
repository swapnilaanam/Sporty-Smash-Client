import React from 'react';
import bannerImg from '../../../assets/images/slider-3-comp.jpg';

const BecomeInstructorBanner = () => {
    return (
        <div className={`w-full h-[400px] md:h-[500px] bg-[url("https://i.ibb.co/wW4vyT7/instructors-1.jpg")] bg-cover bg-fixed relative`}>
            <div className="bg-black bg-opacity-60 absolute w-full h-full">
                <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-28 px-4 md:px-28 text-center lg:text-left py-5 md:py-0">
                    <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug tracking-wide">Join Us Today And Reach The Largest Student Network</h2>
                    <button className="btn btn-warning btn-lg px-8 normal-case text-lg md:text-2xl font-bold">Become An Instructor</button>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructorBanner;