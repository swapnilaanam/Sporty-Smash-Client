import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import Lottie from "lottie-react";
import underlineAnimation from '../../../assets/animation/underline-animation.json';

const ContactUs = () => {
    const form = useRef();

    const { register, formState: { errors } } = useForm();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, "Ecv8GunLOyx7N5-gD")
            .then((result) => {
                form.current.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="pt-28 pb-40 px-4 lg:px-0 bg-yellow-100" id="contact">
            <div>
                <h2 className="text-neutral text-3xl font-semibold leading-snug tracking-wide text-center">
                    Contact
                    <span className="relative">
                        <span className="text-green-600"> Us. </span>
                        <span className="absolute top-7 start-0">
                            <Lottie animationData={underlineAnimation} loop={true} className="min-w-[120px]" />
                        </span>
                    </span>
                </h2>
            </div>
            <div className="max-w-7xl mx-auto mt-20 flex justify-center items-center gap-12 lg:gap-28">
                <div className="w-full lg:w-4/6">
                    <form ref={form} onSubmit={sendEmail} className="w-full space-y-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black text-2xl font-medium mb-1">Name: </span>
                            </label>
                            <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter Your Name..."
                                className="input input-bordered text-white text-lg w-full" />
                            {errors.name && <p className="text-red-500 text-xl font-medium mt-3">Name field is required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black text-2xl font-medium mb-1">Email: </span>
                            </label>
                            <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Your Email..."
                                className="input input-bordered text-white text-lg w-full" />
                            {errors.email && <p className="text-red-500 text-xl font-medium mt-3">Email filed is required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black text-2xl font-medium mb-1">Subject: </span>
                            </label>
                            <input type="text" name="subject" {...register("subject")} placeholder="Write Your Subject..."
                                className="input input-bordered text-white text-lg w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-2xl font-medium mb-1">Message: </span>
                            </label>
                            <textarea name="message" {...register("message", { required: true })} className="textarea textarea-bordered 
                    text-white text-lg h-24" placeholder="Write Your Message...">
                            </textarea>
                            {errors.message && <p className="text-red-500 text-xl font-medium mt-3">Message filed is required!</p>}
                        </div>
                        <div className="form-control lg:mx-10 pt-7">
                            <input type="submit" className="w-full btn bg-green-700 hover:bg-green-800 text-white hover:text-white 
                    border-0 text-xl font-medium capitalize" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;