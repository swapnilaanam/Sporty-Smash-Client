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
        <div className="pt-28 pb-36 md:pb-0 min-h-[750px]" id="feature">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly gap-5 px-4">
                <div className="h-[250px] md:h-[500px] md:h-full relative w-full md:w-3/5">
                    <img src={feature1Img} alt="" className="w-36 h-32 md:w-80 md:h-72 absolute top-0 start-0 rounded-md bg-white md:p-4 shadow-2xl border-black" />
                    <img src={feature2Img} alt="" className="w-36 h-32 md:w-80 md:h-72 absolute top-20 md:top-44 start-24 md:start-44 rounded-md bg-white md:p-4 shadow-2xl" />
                    <img src={feature3Img} alt="" className="w-36 h-32 md:w-80 md:h-72 absolute top-0 start-48 md:start-96 rounded-md bg-white md:p-4 shadow-2xl" />
                </div>
                <div className="w-full md:w-2/5 md:mt-5 text-center">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center md:gap-x-14 gap-y-10 mt-16">
                        <div className="flex justify-between items-center gap-3 md:gap-5">
                            <div>
                                <img src={sportsFeatureIcon} alt="sports feature icon" className="w-24 h-20" />
                            </div>
                            <h4 className="text-lg font-medium leading-tight">Different Sports Categories</h4>
                        </div>
                        <div className="flex justify-between items-center gap-3 md:gap-5">
                            <div>
                                <img src={oneToOneIcon} alt="sports feature icon" className="w-24 h-20" />
                            </div>
                            <h4 className="text-lg font-medium">One To One Sessions</h4>
                        </div>
                        <div className="flex justify-between items-center gap-3 md:gap-5">
                            <div>
                                <img src={paymentMethodsIcon} alt="sports feature icon" className="w-24 h-20" />
                            </div>
                            <h4 className="text-lg font-medium">Easy Payment Methods</h4>
                        </div>
                        <div className="flex justify-between items-center gap-3 md:gap-5">
                            <div>
                                <img src={instructorsIcon} alt="sports feature icon" className="w-24 h-20" />
                            </div>
                            <h4 className="text-lg font-medium">Country's Best Instructors</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;