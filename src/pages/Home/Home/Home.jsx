import useTitle from "../../../hooks/useTitle";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
    useTitle('Home');

    return (
        <div className="bg-emerald-50">
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;