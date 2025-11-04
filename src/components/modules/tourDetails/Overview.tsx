import { MapPinMinus, MapPinPlus, User, Users } from "lucide-react";

type TProps = {
  departure: string;
  arrival: string;
  maxGuest: number;
  minAge: number;
};

const Overview = ({ departure, arrival, maxGuest, minAge }: TProps) => {
  return (
    <div className="mt-8">
      <h1 className="font-medium text-2xl mb-4">Overview</h1>

      <div className="text-muted-foreground mb-3 flex flex-col xl:flex-row md:justify-between items-center gap-2">
        <div className="w-full">
          <p className="flex items-center gap-2">
            <MapPinPlus width={17} />
            <span className="text-base ">
              Departure: <span className="font-medium">{departure}</span>
            </span>
          </p>
          <p className="flex items-center gap-2 mt-3">
            <MapPinMinus width={18} />
            Arrival: <span className="font-medium">{arrival}</span>
          </p>
        </div>

        <div className="w-full xl:w-96">
          <p className="flex items-center gap-2">
            <Users width={17} /> Travelers:{" "}
            <span className="font-medium">{maxGuest} guests</span>
          </p>
          <p className="flex items-center gap-2 mt-3">
            <User width={17} /> Min Age:{" "}
            <span className="font-medium">{minAge} years</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
