import Loader from "@/components/shared/Loader/Loader";
import { Button } from "@/components/ui/button";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";
import { CalendarCheck, CalendarMinus2, MapPin } from "lucide-react";
import { Link } from "react-router";

const Tours = () => {
  const { data: tourData, isLoading } = useGetAllTourQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {tourData?.length === 0 ? (
        <div className="text-xl h-9 text-center">No Tour Found</div>
      ) : (
        tourData?.map((tour: any) => (
          <div key={tour._id} className="border rounded-2xl w-full bg-white md:w-96">
            <img
              src={tour.images[0]}
              alt="img"
              className="w-full h-56 rounded-t-2xl"
            />

            <div className="p-3 ">
              {/* title */}
              <p className="font-semibold text-base flex items-center gap-1">
                <MapPin width={18} /> {tour.title}
              </p>

              {/* description */}
              <p className=" pt-3 text-base text-muted-foreground">
                {tour.description.slice(0, 130)}...
              </p>

              {/* start & end Date */}
              <div className="flex justify-between items-center my-3">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <CalendarCheck width={16} />
                  {tour.startDate.split("T")[0]}
                </span>

                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <CalendarMinus2 width={16} />
                  {tour.endDate.split("T")[0]}
                </span>
              </div>

              {/* navigate button */}
              <Button asChild className="w-full">
                <Link to={`/tours/${tour._id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Tours;
