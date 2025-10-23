import { Check } from "lucide-react";

type TProps = {
  amenities: string[];
};

const Amenities = ({ amenities }: TProps) => {
  return (
    <div className="mt-9 border-t pt-5">
      <h1 className="mb-4 text-2xl font-medium">Amenities</h1>

      <div>
        {amenities.map((amenity: any) => (
          <div
            key={amenity}
            className="flex flex-col my-2 text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <Check color="green" width={17} /> {amenity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
