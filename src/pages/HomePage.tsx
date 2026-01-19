import { HeroSection } from "@/components/modules/HomePage/HeroSection";
import { Link } from "react-router";
import PopularDestination from "@/components/modules/HomePage/popularDestination/PopularDestination";
import TourCard from "@/components/modules/TourPage/TourCard";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";
import Loader from "@/components/shared/Loader/Loader";
import Modal from "@/components/shared/modal/Modal";

const HomePage = () => {
  const { data, isLoading } = useGetAllTourQuery({ limit: 8 });

  if (isLoading) {
    return (
      <div>
        <Modal modal={<Loader />} />
      </div>
    );
  }
  return (
    <div>
      <HeroSection />

      <PopularDestination />

      {/* Tour Section */}
      <div className="container mx-auto px-3 lg:px-16 mt-20">
        <div className="flex justify-between items-center mb-5 font-jost text-primary">
          <p className="text-3xl font-semibold">Recent Tours</p>
          <Link
            to="/tours"
            className="hover:text-dark-3 border-b border-primary hover:border-dark-3 transition-normal duration-300 ease-in-out"
          >
            View All Tours
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <TourCard tourData={data?.data} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
