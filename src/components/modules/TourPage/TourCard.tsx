import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarCheck, CalendarMinus2, MapPin } from "lucide-react";
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
              className="border rounded-2xl w-full bg-white overflow-hidden"
            >
              <img
                src={tour.images[0]}
                alt="img"
                className="w-full h-56 rounded-t-2xl"
              />

              <div className="p-3 ">
                {/* title */}
                <p className="font-medium text-base flex items-center gap-1 text-wrap">
                  <MapPin width={18} /> {tour.title}
                </p>

                {/* description */}
                <p className=" pt-3 text-base text-muted-foreground">
                  {tour.description.slice(0, 130)}...
                </p>

                {/* start & end Date */}
                <div className="flex justify-between items-center my-5">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarCheck width={14} />
                    {format(tour.startDate, "PPP")}
                  </span>

                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarMinus2 width={14} />
                    {format(tour.endDate, "PPP")}
                  </span>
                </div>

                {/* navigate button */}
                <Button asChild className="w-full">
                  <Link to={`/tours/${tour._id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TourCard;
