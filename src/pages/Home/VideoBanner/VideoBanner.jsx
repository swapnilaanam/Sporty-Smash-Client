import React from 'react';

import videoBanner from '../../../assets/vidoes/pexels-rodnae-productions-8034226 (1080p).mp4';
import { Link } from 'react-router-dom';

const VideoBanner = () => {
    return (
        <div className="relative">
            <video className="w-full h-[500px] object-cover" autoPlay={true} muted={true} loop={true} controls={false}>
                <source src={videoBanner} type="video/mp4"></source>
            </video>
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center z-10 text-center bg-black bg-opacity-50">
                <h4 className="text-3xl text-white capitalize font-medium mb-7">A lifetime fun experience with the group</h4>
                <Link to="/classes" className="bg-yellow-400 px-7 py-3.5 text-lg font-medium rounded-md">Enroll Today</Link>
            </div>
        </div>
    );
};

export default VideoBanner;