import Loader from "@/components/shared/Loader/Loader";
import { useGetSingleTourQuery } from "@/redux/features/tour/tour.api";
import { useParams } from "react-router";
import ImageCarousel from "@/components/modules/tourDetails/Carousel";
import IncludesExcludes from "@/components/modules/tourDetails/IncludesExcludes";
import TourPlan from "@/components/modules/tourDetails/TourPlan";
import Amenities from "@/components/modules/tourDetails/Amenities";
import Overview from "@/components/modules/tourDetails/Overview";
import BookingCard from "@/components/modules/tourDetails/BookingCard";
import TitleSection from "@/components/modules/tourDetails/TitleSection";

const TourDetails = () => {
  const { id } = useParams();
  const { data: tour, isLoading } = useGetSingleTourQuery(id);

  if (isLoading) {
    return (
      <div className="h-dvh flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-32 px-5 lg:px-16 flex flex-col gap-10 justify-between font-jost">
      {/* upper section */}
      <TitleSection tour={tour} />

      {/* image and details section */}
      <section className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[66%]">
          {/* Image */}
          <div className="w-full">
            <ImageCarousel images={tour.images} />
          </div>

          {/* overview */}
          <Overview
            departure={tour.departureLocation}
            arrival={tour.arrivalLocation}
            maxGuest={tour.maxGuest}
            minAge={tour.minAge}
          />

          {/* description */}
          <p className="text-wrap text-muted-foreground mt-7">
            <span className="font-medium text-black">Description: </span>
            {tour.description}
          </p>

          {/* tour plan */}
          <TourPlan tourPlan={tour.tourPlan} />

          {/* include/exclude */}
          <IncludesExcludes included={tour.included} excluded={tour.excluded} />

          {/* amenities */}
          <Amenities amenities={tour.amenities} />
        </div>

        {/* Booking card section */}
        <BookingCard tour={tour} />
      </section>
    </div>
  );
};

export default TourDetails;
