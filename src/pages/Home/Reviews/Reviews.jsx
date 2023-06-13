const Reviews = () => {
    return (
        <div className="max-w-7xl mx-auto pt-12 pb-24 px-4">
            <h2 className="text-center font-bold text-3xl uppercase mb-20">Reviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="font-semibold mb-1">Rakib Elahi</div>
                    <div className="text-gray-500 text-sm mb-2">Student</div>
                    <div className="text-gray-800">
                        <p>
                            The quality of the classes of this platform is just amazing! Though need to work on the environment.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    <div className="font-semibold mb-1">Andrew Duke</div>
                    <div className="text-gray-500 text-sm mb-2">Instructor</div>
                    <div className="text-gray-800">
                        <p>
                            The experience of taking my summer camp classes through this platform have been amazing. Payment and Everything is on time.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="rating">
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="font-semibold mb-1">Arman Ahmed</div>
                    <div className="text-gray-500 text-sm mb-2">Student</div>
                    <div className="text-gray-800">
                        <p>
                            Sports classes of this platform are great. But the platform needs to improve customer service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;