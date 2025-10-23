import Loader from "@/components/shared/Loader/Loader";
import { useGetSingleTourQuery } from "@/redux/features/tour/tour.api";
import {
  CalendarCheck,
  CalendarMinus2,
  LayoutList,
  MapPin,
  Minus,
  Plus,
} from "lucide-react";
import { useParams } from "react-router";
import { format } from "date-fns";
import ImageCarousel from "@/components/modules/tourDetails/Carousel";
import IncludesExcludes from "@/components/modules/tourDetails/IncludesExcludes";
import TourPlan from "@/components/modules/tourDetails/TourPlan";
import Amenities from "@/components/modules/tourDetails/Amenities";
import Overview from "@/components/modules/tourDetails/Overview";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import TKIcon from "@/assets/icons/TK";

const TourDetails = () => {
  const { id } = useParams();
  const { data: tour, isLoading } = useGetSingleTourQuery(id);

  const [quantity, setQuantity] = useState(1);

  const totalAmount = tour?.costFrom * quantity;

  const increment = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setQuantity((prevCount) => Math.max(1, prevCount - 1));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto my-16 px-3 flex flex-col lg:flex-row gap-12 justify-between">
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

      {/* Image & booking card */}
      <div className="w-full flex flex-col  items-center">
        <ImageCarousel images={tour.images} />

        <div className="mt-20 mx-10 p-5 bg-white w-96 rounded-md shadow-lg">
          <h3 className="text-lg text-muted-foreground mb-1">from</h3>

          <p className="flex items-center text-muted-foreground gap-1">
            <TKIcon height={32} width={22} />
            <span className="font-semibold text-2xl">{tour.costFrom}</span>{" "}
            /person
          </p>

          <div className="flex items-center justify-between h-24 text-muted-foreground ">
            <p>Total Guests: </p>

            <div className="space-x-5">
              {/* Decrement Button */}
              <Button
                onClick={decrement}
                variant="outline"
                size="icon"
                className="h-9 w-9 p-2"
                disabled={quantity === 1}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="w-8 text-center font-semibold text-lg">
                {quantity}
              </span>

              {/* Increment Button */}
              <Button onClick={increment} size="icon" className="h-9 w-9 p-2">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center text-muted-foreground text-xl">
            <span>Total Amount</span>
            <span className="flex gap-1 items-center">
              <TKIcon height={30} width={15} /> {totalAmount}
            </span>
          </div>

          <Button className="w-full mt-5 text-lg">Book</Button>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
