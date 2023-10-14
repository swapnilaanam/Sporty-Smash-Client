import useTitle from "../../../hooks/useTitle";
import BecomeInstructorBanner from "../BecomeInstructorBanner/BecomeInstructorBanner";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import LatestNews from "../LatestNews/LatestNews";
import OurFeatures from "../OurFeatures/OurFeatures";
import PaymentPartners from "../PaymentPartners/PaymentPartners";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import TopSlider from "../TopSlider/TopSlider";
import VideoBanner from "../VideoBanner/VideoBanner";

const Home = () => {
    useTitle('Home');

    return (
        <div className="bg-green-100">
            <TopSlider></TopSlider>
            <OurFeatures></OurFeatures>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
            <VideoBanner></VideoBanner>
            <LatestNews></LatestNews>
            <Gallery></Gallery>
            <BecomeInstructorBanner></BecomeInstructorBanner>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
            <PaymentPartners></PaymentPartners>
        </div>
    );
};

export default Home;