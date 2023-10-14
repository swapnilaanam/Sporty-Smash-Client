import Lottie from "lottie-react";
import underlineAnimation from '../../../assets/animation/underline-animation.json';

import feature1Img from '../../../assets/images/features-1-min.jpg';
import feature2Img from '../../../assets/images/features-2-min.jpg';
import feature3Img from '../../../assets/images/features-3-min.jpg';

import sportsFeatureIcon from '../../../assets/images/sports-feature-icon.png';
import oneToOneIcon from '../../../assets/images/one-to-one.png';
import paymentMethodsIcon from '../../../assets/images/atm-card.png';
import instructorsIcon from '../../../assets/images/coach.png';

const OurFeatures = () => {
    return (
        <div className="pt-28 pb-40" id="feature">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly items-center gap-28 px-4">
                <div className="w-full flex flex-col items-center md:w-[50%] text-center">
                    <div>
                        <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide">
                            Why You Should
                            <span className="">
                                <span className="text-green-600 relative mx-4">
                                    Choose
                                    <span className="absolute top-7 start-0">
                                        <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                                    </span>
                                </span>
                            </span>
                            Us
                        </h2>
                    </div>

                    <p className="w-full mt-6 text-base font-medium ps-2">
                        Discover the Difference: Elevate Your Summer Experience with Our Premier Sports Camp - Where Fun, Skill-Building, and Unforgettable Memories Converge!
                    </p>
                    <div className="space-y-7 mt-20 w-[85%]">
                        <div className="flex justify-center items-center gap-2 md:gap-4 bg-yellow-100 py-3.5 px-4 rounded">
                            <img src={sportsFeatureIcon} alt="sports feature icon" className="w-10 h-10 object-cover" />
                            <h4 className="text-base font-medium leading-tight">Different Sports Categories</h4>
                        </div>
                        <div className="flex justify-center items-center gap-2 md:gap-4 bg-yellow-100 py-3.5 px-4 rounded">
                            <img src={oneToOneIcon} alt="sports feature icon" className="w-10 h-10 object-cover" />
                            <h4 className="text-base font-medium leading-tight">One To One Sessions</h4>
                        </div>
                        <div className="flex justify-center items-center gap-2 md:gap-4 bg-yellow-100 py-3.5 px-4 rounded">
                            <img src={paymentMethodsIcon} alt="sports feature icon" className="w-10 h-10 object-cover" />
                            <h4 className="text-base font-medium leading-tight">Easy Payment Methods</h4>
                        </div>
                        <div className="flex justify-center items-center gap-2 md:gap-4 bg-yellow-100 py-3.5 px-4 rounded">
                            <img src={instructorsIcon} alt="sports feature icon" className="w-10 h-10 object-cover" />
                            <h4 className="text-base font-medium leading-tight">Country's Best Instructors</h4>
                        </div>
                    </div>
                </div>
                <div className="h-[250px] md:h-full relative w-full md:w-[50%]">
                    <div className="flex justify-center items-center gap-10">
                        <img src={feature1Img} alt="" className="w-36 h-32 md:w-80 md:h-72 rounded-md bg-white md:p-4 shadow-2xl border-black" />
                        <img src={feature2Img} alt="" className="w-36 h-32 md:w-80 md:h-72 md:start-44 rounded-md bg-white md:p-4 shadow-2xl" />
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <img src={feature3Img} alt="" className="w-36 h-32 md:w-80 md:h-72 rounded-md bg-white md:p-4 shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;