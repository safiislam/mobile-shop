import Categories from "../../Components/HomeComponents/Categories";
import ContactInfo from "../../Components/HomeComponents/ContactInfo";
import FAQs from "../../Components/HomeComponents/FAQs";
import FeaturedProducts from "../../Components/HomeComponents/FeaturedProducts";
import HeroSection from "../../Components/HomeComponents/HeroSection";
import Testimonials from "../../Components/HomeComponents/Testimonials";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <Testimonials />
            <Categories />
            <FAQs />
            <ContactInfo />
        </div>
    );
};

export default Home;