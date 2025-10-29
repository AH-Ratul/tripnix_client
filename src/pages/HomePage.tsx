import { HeroSection } from "@/components/modules/HomePage/HeroSection";
import Tours from "./Tours";
import { Link } from "react-router";
import PopularDestination from "@/components/modules/HomePage/popularDestination/PopularDestination";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      {/* Tour Section */}
      <div className="container mx-auto px-3  mt-20">
        <div className="flex justify-between items-center mb-5">
          <p className="text-3xl font-medium font-marcellus">Recent Tours</p>
          <Link
            to={""}
            className="hover:text-coquelicot border-b border-black hover:border-coquelicot transition-normal duration-300 ease-in-out"
          >
            View All Tours
          </Link>
        </div>

        <Tours />
      </div>

      <PopularDestination />
    </div>
  );
};

export default HomePage;
