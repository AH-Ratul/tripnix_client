import { popularDestinations } from "@/lib/data/popularDestinations";
import DestinationCard from "./DestinationCard";

const PopularDestination = () => {
  return (
    <div className="container mx-auto mt-20 mb-10 px-3 lg:px-0">
      <h1 className="text-3xl font-medium font-marcellus">
        Popular Destination
      </h1>

      <div className="grid gap-4 md:grid-cols-4 my-7">
        <DestinationCard {...popularDestinations[0]} />
        <div className="flex flex-col gap-4">
          <DestinationCard {...popularDestinations[1]} />
          <DestinationCard {...popularDestinations[2]} />
        </div>
        <DestinationCard {...popularDestinations[3]} />
        <div className="flex flex-col gap-4">
          <DestinationCard {...popularDestinations[4]} />
          <DestinationCard {...popularDestinations[2]} />
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
