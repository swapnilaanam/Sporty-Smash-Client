import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer >
            <div className="footer footer-center flex flex-col lg:flex-row justify-around items-center py-12 px-16 bg-base-300 text-base-content rounded gap-16 lg:gap-8 border-t-2 shadow-sm">
                <div className="space-y-3">
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="flex text-2xl text-green-600">
                            <span className="ml-2 font-bold">Sporty Smash</span>
                        </div>
                        <p className="text-base font-medium">Address: Anondo, Uttara, Dhaka.</p>
                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-10">
                            <Link to="https://twitter.com/" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </Link>
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <FaInstagram className="text-2xl" />
                            </Link>
                            <Link to="https://www.facebook.com/" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                        <p className="text-base font-medium">Phone: 01784598221</p>
                        <p className="text-base font-medium">Email: contact@sportysmash.com</p>
                    </div>

                </div>
            </div>
            <div className="py-5 bg-stone-800 text-white text-center">
                <p className="font-medium text-base">Copyright © 2023 - All rights reserved by Sporty Smash.</p>
            </div>
        </footer >
    );
};

export default Footer;