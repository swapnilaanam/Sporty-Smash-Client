import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';

import Lottie from "lottie-react";
import underlineAnimation from '../../../assets/animation/underline-animation.json';
import reviewAnimation from '../../../assets/animation/review.json';
import quoteAnimation from '../../../assets/animation/qoute.json';

import 'swiper/css';
import 'swiper/css/effect-creative';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="py-28 pb-36 bg-yellow-100">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center md:items-start gap-10">
                <div className="w-full md:w-1/2">
                    <div className="mb-20">
                        <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide">
                            What Our 
                            <span className="relative">
                                <span className="text-green-600"> Customer </span>
                                <span className="absolute top-7 start-0">
                                    <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                                </span>
                            </span>
                            Says About Us.
                        </h2>
                    </div>
                    <div className="w-full">
                        <Swiper
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                type: 'progressbar',
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {reviews.map((review) => (
                                <SwiperSlide>
                                    <div className="min-w-full bg-white py-12 px-7 space-y-3 rounded-md rounded-t-none border-2 border-gray-100 shadow-xl text-center">
                                        <Lottie animationData={quoteAnimation} loop={true} className="absolute top-3 right-8 w-24 h-24" />
                                        <div className="rating">
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="font-semibold text-lg mb-1">{review?.name}</div>
                                        <div className="text-gray-500 text-base font-medium mb-2">{review?.role}</div>
                                        <div className="text-gray-800 ">
                                            <p className="mt-8">
                                                {review?.feedback}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Lottie animationData={reviewAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Reviews;