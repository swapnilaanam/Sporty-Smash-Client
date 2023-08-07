import Lottie from "lottie-react";
import Marquee from "react-fast-marquee";
import underlineAnimation from '../../../assets/animation/underline-animation.json';


import mastercardImg from '../../../assets/images/mastercard.png';
import visacardImg from '../../../assets/images/visa.png';
import americanexpressImg from '../../../assets/images/american-express.jpg';
import discoverImg from '../../../assets/images/discover.jpg';
import unionpayImg from '../../../assets/images/union-pay.png';
import stripeImg from '../../../assets/images/stripe.png';

const PaymentPartners = () => {
    return (
        <div className="pt-28 pb-36 px-4">
            <div className="text-center mb-20">
                <h2 className="text-neutral text-3xl font-semibold leading-relaxed tracking-wide">
                    Our
                    <span className="">
                        <span className="text-green-600 relative mx-4">
                            Payment
                            <span className="absolute top-7 start-0">
                                <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                            </span>
                        </span>
                    </span>
                    Partners
                </h2>
            </div>
            <div className="max-w-6xl mx-auto py-14">
                <Marquee>
                    <div className="w-40 h-32 mx-8">
                        <img src={mastercardImg} />
                    </div>
                    <div className="w-40 h-32 mx-8">
                        <img src={visacardImg} />
                    </div>
                    <div className="w-40 h-32 mx-8">
                        <img src={americanexpressImg} />
                    </div>
                    <div className="w-40 h-32 mx-8">
                        <img src={discoverImg} />
                    </div>
                    <div className="w-40 h-32 mx-8">
                        <img src={unionpayImg} />
                    </div>
                    <div className="w-40 h-32 mx-8">
                        <img src={stripeImg} />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default PaymentPartners;