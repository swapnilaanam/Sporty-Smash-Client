import { useLocation } from "react-router-dom";

const SingleNews = () => {
    const location = useLocation();
    const { image, heading, description } = location.state?.news;

    return (
        <div>
            <div>
                <img src={image} alt="news image" className="w-full h-[350px] object-cover" />
            </div>
            <div className="pt-20 pb-40">
                <h2 className="text-center font-semibold text-3xl px-4 mb-12 capitalize">{heading}</h2>
                <p className="text-center font-medium text-base leading-relaxed px-6 md:mx-28">{description}</p>
            </div>
        </div>
    );
};

export default SingleNews;