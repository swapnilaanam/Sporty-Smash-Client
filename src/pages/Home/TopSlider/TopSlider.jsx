import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from "../../../assets/images/slider-1.jpg";
import slider2 from "../../../assets/images/slider-3.jpg";
import slider3 from "../../../assets/images/slider-2.jpg";

import './TopSlider.css';
import { Link } from "react-router-dom";

const TopSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // autoplay={{
                //     delay: 8000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[600px]"
            >
                <SwiperSlide>
                    <div className="h-full relative">
                        <img src={slider1} alt="slider" className="object-cover h-full w-full absolute top-0 left-0"
                        />
                        <div className="slider-text text-center">
                            <h2 className="text-3xl text-yellow-400 font-bold bg-black bg-opacity-80 w-fit mx-auto px-10 py-3 rounded">Sporty Smash</h2>
                            <p className="capitalize mt-5 text-xl bg-black bg-opacity-70 lg:w-3/4 mx-auto px-5 py-2 rounded">We are committed to provide best summer sports camp classes to our students</p>
                            <div className="mt-6 mx-auto flex flex-col lg:flex-row justify-center gap-5">
                                <Link to="/classes">
                                    <button className="btn btn-neutral shadow-lg border-2 text-base">See Our Classes</button>
                                </Link>
                                <Link to="/instructors">
                                    <button className="btn btn-warning shadow-lg border-2 text-base h-16 lg:h-0">See Our Instructors</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full relative">
                        <img src={slider2} alt="slider" className="object-cover h-full w-full absolute top-0 left-0"
                        />
                        <div className="slider-text text-center">
                            <h2 className="text-3xl text-yellow-400 font-bold bg-black bg-opacity-80 w-fit mx-auto px-10 py-3 rounded">
                                Best Instructors
                            </h2>
                            <p className="capitalize mt-5 text-xl bg-black bg-opacity-70 lg:w-3/4 mx-auto px-5 py-2 rounded">
                                Our instructors train our student's mentality in a sport along with tactical and practical training in a sport
                            </p>
                            <div className="mt-6">
                                <Link to="/instructors">
                                    <button className="btn btn-warning shadow-lg border-2 text-base">Our Instructors</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full relative">
                        <img src={slider3} alt="slider" className="object-cover h-full w-full absolute top-0 left-0"
                        />
                        <div className="slider-text text-center">
                            <h2 className="text-3xl text-yellow-400 font-bold bg-black bg-opacity-80 w-fit mx-auto px-10 py-3 rounded">
                                Best Sports Classes
                            </h2>
                            <p className="capitalize mt-5 text-xl bg-black bg-opacity-70 lg:w-3/4 mx-auto px-5 py-2 rounded">
                                We have the best summer sports classes of almost every popular sports
                            </p>
                            <div className="mt-6">
                                <Link to="/classes">
                                    <button className="btn btn-warning shadow-lg border-2 text-base">Our Classes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TopSlider;
