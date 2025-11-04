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
            <div key={tour._id} className="border rounded-2xl w-full bg-white">
              <img
                src={tour.images[0]}
                alt="img"
                className="w-full h-56 rounded-t-2xl"
              />

              <div className="p-3">
                {/* title */}
                <p className="font-semibold text-base flex items-center gap-1">
                  <MapPin width={18} /> {tour.title.slice(0, 37)}
                </p>

                {/* description */}
                <p className=" pt-3 text-muted-foreground text-sm">
                  {tour.description.slice(0, 90)}...
                </p>

                {/* start & end Date */}
                <div className="flex justify-between items-center my-3">
                  <span className="flex items-center gap-0.5 text-muted-foreground text-sm">
                    <CalendarCheck width={13} color="black" />
                    {format(tour.startDate, "PPP")}
                  </span>

                  <span className="flex items-center gap-0.5 text-muted-foreground text-sm">
                    <CalendarMinus2 width={13} color="black" />
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
