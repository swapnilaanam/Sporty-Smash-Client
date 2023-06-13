import PopularClasses from "../PopularClasses/PopularClasses";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
    return (
        <div className="bg-emerald-50">
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;