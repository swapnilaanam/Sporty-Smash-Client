import Lottie from "lottie-react";
import underlineAnimation from '../../../assets/animation/underline-animation.json';

const FAQ = () => {
    return (
        <div className="pt-28 pb-40 px-4 lg:px-0">
            <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide text-center mb-20">
                Frequently Asked Question
                <span className="relative">
                    <span className="text-green-600"> Joy. </span>
                    <span className="absolute top-7 start-0">
                        <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                    </span>
                </span>
            </h2>

            <div className="max-w-5xl mx-auto space-y-4">
                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            Is the online card payment secure?
                        </h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p className="py-4 px-4 leading-relaxed text-gray-700 bg-yellow-100">
                        Yes. The online card payment we receive is processed through one of the reliable payment gateway Stripe!
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            There is a course I like that is missing, What can I do? 
                        </h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p className="py-4 px-4 leading-relaxed text-gray-700 bg-yellow-100">
                        We are sorry to hear that, our effort is to cover all the sports course on the website! However if a course is missing you can let us know about it through the Contact Us on the home page!
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            How can I start my own sports camp course? 
                        </h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p className="py-4 px-4 leading-relaxed text-gray-700 bg-yellow-100">
                        You can easily start taking your own sports camp course on our website by registering yourself as a instructor. They you can add your course from the dashboard! If we approve the course then students can enroll into your courses. Simple, isn't it? 
                    </p>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            Will the instructors receive the course payment directly? 
                        </h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p className="py-4 px-4 leading-relaxed text-gray-700 bg-yellow-100">
                        No. To ensure the security of money both for the student and instructor, we will receive the money first and if there is no issue from the student end withing first 2 days, instructor will be paid their due amount!
                    </p>
                </details>
            </div>
        </div>
    );
};

export default FAQ;