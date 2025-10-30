import { HeroSection } from "@/components/modules/HomePage/HeroSection";
import { Link } from "react-router";
import PopularDestination from "@/components/modules/HomePage/popularDestination/PopularDestination";
import TourCard from "@/components/modules/TourPage/TourCard";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";
import Loader from "@/components/shared/Loader/Loader";

const HomePage = () => {
  const { data, isLoading } = useGetAllTourQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          <TourCard tourData={data} />
        </div>
      </div>

      <PopularDestination />
    </div>
  );
};

export default HomePage;
