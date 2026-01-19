import { Link } from "react-router";

const TourCard = ({ tourData }: any) => {
  return (
    <>
      {tourData?.length === 0 ? (
        <p className="text-xl h-9 text-center m-5">No Tour Found</p>
      ) : (
        <>
          {tourData?.map((tour: any) => (
            <div key={tour._id} className="w-full bg-white ">
              <Link to={`/tours/${tour._id}`} className="relative group ">
                <img
                  src={tour.images[0]}
                  alt={tour.title || "Tour image"}
                  className="w-full h-72 rounded-sm object-cover "
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-sm" />
              </Link>

              <div className="font-jost">
                {/* title */}
                <p className="mt-2">
                  <Link
                    to={`/tours/${tour._id}`}
                    className="font-semibold  text-primary text-lg hover:underline"
                  >
                    {tour.title.slice(0, 37)}
                  </Link>
                </p>

                <p className="text-muted-foreground text-sm py-1">
                  {tour.location}
                </p>

                <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
                  From{" "}
                  <span className="text-base font-semibold text-primary">
                    ${tour.costFrom}/person
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
