import Loader from "@/components/shared/Loader/Loader";
import { useGetSingleTourQuery } from "@/redux/features/tour/tour.api";
import {
  CalendarCheck,
  CalendarMinus2,
  LayoutList,
  MapPin,
} from "lucide-react";
import { useParams } from "react-router";
import { format } from "date-fns";
import ImageCarousel from "@/components/modules/tourDetails/Carousel";
import IncludesExcludes from "@/components/modules/tourDetails/IncludesExcludes";
import TourPlan from "@/components/modules/tourDetails/TourPlan";
import Amenities from "@/components/modules/tourDetails/amenities";
import Overview from "@/components/modules/tourDetails/Overview";

const TourDetails = () => {
  const { id } = useParams();
  const { data: tour, isLoading } = useGetSingleTourQuery(id);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto my-16 px-3 flex flex-col-reverse lg:flex-row gap-12 justify-between">
      {/* Images */}
      <div className="w-full">
        <ImageCarousel images={tour.images} />
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-bold font-marcellus">{tour.title}</h1>
        <span className="flex items-center gap-2 font-medium my-3">
          <MapPin width={17} /> {tour.location}
        </span>
        <p className="flex items-center gap-2">
          <LayoutList width={19} />
          <span>
            Tour Type: <span className="font-medium">{tour.tourType.name}</span>
          </span>
        </p>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row w-fit gap-3 my-5">
          <span className="flex items-center gap-1.5 text-coquelicot bg-coquelicot/15 rounded-md px-5 py-2">
            <CalendarCheck width={16} />
            Starts : {format(tour.startDate, "PPP")}
          </span>

          <span className="flex items-center gap-1.5 text-coquelicot bg-coquelicot/15 rounded-md px-5 py-2">
            <CalendarMinus2 width={16} />
            Ends : {format(tour.endDate, "PPP")}
          </span>
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
    </div>
  );
};

export default TourDetails;
