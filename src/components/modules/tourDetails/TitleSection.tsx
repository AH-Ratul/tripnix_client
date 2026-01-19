import { Button } from "@/components/ui/button";
import { Heart, LayoutList, MapPin, Share } from "lucide-react";
import { toast } from "sonner";

const TitleSection = ({ tour }: any) => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">{tour.title}</h1>
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2  sm:gap-7 flex-wrap">
          <span className="flex items-center gap-2 text-base text-muted-foreground my-3">
            <MapPin width={15} /> {tour.location}
          </span>
          <p className="flex items-center gap-2 text-base text-muted-foreground">
            <LayoutList width={15} />
            <span>Tour Type: {tour.tourType.name}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => toast.info("Working on...")}
            className="bg-transparent text-primary shadow-none hover:bg-secondary-1 hover:text-white font-medium text-base rounded cursor-pointer"
          >
            <Share /> Share
          </Button>
          <Button
            onClick={() => toast.info("Working on...")}
            className="bg-muted text-primary shadow-none hover:bg-secondary-1 hover:text-white font-medium text-base rounded cursor-pointer"
          >
            <Heart /> Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
