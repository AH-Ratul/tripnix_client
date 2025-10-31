import TKIcon from "@/assets/icons/TK";
import { differenceInDays } from "date-fns";
import { Clock4, MapPin, Users } from "lucide-react";
import { Link } from "react-router";

const TourCard = ({ tourData }: any) => {
  return (
    <>
      {tourData?.length === 0 ? (
        <p className="text-xl h-9 text-center m-5">No Tour Found</p>
      ) : (
        <>
          {tourData?.map((tour: any) => (
            <div
              key={tour._id}
              className="border relative h-[410px] rounded-2xl w-full bg-white overflow-hidden"
            >
              <img
                src={tour.images[0]}
                alt="img"
                className="w-full h-52 rounded-t-2xl"
              />

              {/* location */}
              <div className="px-5">
                <p className="my-3 font-medium flex items-center gap-1">
                  <MapPin width={15} color="green" />
                  {tour.location.split(",")[0]}
                </p>

                {/* title link to details page */}
                <Link
                  to={`/tours/${tour._id}`}
                  className="font-medium  text-xl hover:text-coquelicot flex items-center gap-1 text-wrap transition duration-300 ease-in-out"
                >
                  {tour.title}
                </Link>

                {/* duration & maxGuests */}
                <div className="flex gap-10 items-center my-3">
                  <span className="flex items-center gap-1 text-base text-muted-foreground">
                    <Clock4 width={15} color="black" />
                    {differenceInDays(tour.endDate, tour.startDate)} days
                  </span>

                  <span className="flex items-center gap-2 text-base text-muted-foreground">
                    <Users color="black" width={15} />0 - {tour.maxGuest}
                  </span>
                </div>
              </div>

              {/* cost */}
              <div className="absolute bottom-0 mb-3 px-5">
                <p className="flex items-center gap-2">
                  from{" "}
                  <span className="flex items-center gap-0.5 font-medium text-lg">
                    <TKIcon height={15} />
                    {tour.costFrom}
                    <span className="font-normal text-muted-foreground text-base">
                      /person
                    </span>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TourCard;
