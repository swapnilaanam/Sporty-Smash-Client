import Lottie from "lottie-react";
import underlineAnimation from '../../../assets/animation/underline-animation.json';
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/badminton-class-comp.jpg"
import img2 from "../../../assets/images/hockey-class.jpg"
import img3 from "../../../assets/images/cricket-class.jpg"
import img4 from "../../../assets/images/football-class.jpg"
import img5 from "../../../assets/images/swimming-class.jpg"
import img6 from "../../../assets/images/skateboarding-class-2.jpg"

const Gallery = () => {
    return (
        <section className="pt-28 pb-40">
            <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div
                    class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div
                        class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide">
                            Gallery Of
                            <span className="relative">
                                <span className="text-green-600"> Joy. </span>
                                <span className="absolute top-7 start-0">
                                    <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                                </span>
                            </span>
                        </h2>

                        <p class="mt-4 text-gray-600">
                            Some great joyful moments of our students from past summer camps.
                        </p>
                        <Link
                            href="/classes"
                            class="mt-8 inline-block rounded bg-green-600 px-12 py-3 text-base font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Enroll Into Joy
                        </Link>
                    </div>

                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <img src={img1} alt="Gallery" className="h-[136px] p-1 bg-yellow-200 rounded-sm" />
                        <img src={img2} alt="Gallery" className="h-[136px] p-1 bg-yellow-200 rounded-sm" />
                        <img src={img3} alt="Gallery" className="h-[136px] p-1 bg-yellow-200 rounded-sm" />
                        <img src={img4} alt="Gallery" className="h-[136px] p-1 bg-yellow-200 rounded-sm" />
                        <img src={img5} alt="Gallery" className="h-[136px] p-1 bg-yellow-200 rounded-sm" />
                        <img src={img6} alt="Gallery" className="h-[136px] p-1 bg-yellow-200 rounded-sm" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;