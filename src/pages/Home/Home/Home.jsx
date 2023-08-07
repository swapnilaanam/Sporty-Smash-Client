import useTitle from "../../../hooks/useTitle";
import BecomeInstructorBanner from "../BecomeInstructorBanner/BecomeInstructorBanner";
import LatestNews from "../LatestNews/LatestNews";
import OurFeatures from "../OurFeatures/OurFeatures";
import PaymentPartners from "../PaymentPartners/PaymentPartners";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
    useTitle('Home');

    return (
        <div className="bg-green-100">
            <TopSlider></TopSlider>
            <OurFeatures></OurFeatures>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
            <BecomeInstructorBanner></BecomeInstructorBanner>
            <LatestNews></LatestNews>
            <PaymentPartners></PaymentPartners>
        </div>
    );
};

export default Home;