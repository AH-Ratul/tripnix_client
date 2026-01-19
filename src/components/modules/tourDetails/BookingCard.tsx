import TKIcon from "@/assets/icons/TK";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const BookingCard = ({ tour }: any) => {
  const [guestCount, setGuestCount] = useState(1);
  const navigate = useNavigate();

  const increment = () => {
    setGuestCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setGuestCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const navigateToConfirmBooking = () => {
    navigate(`/booking/${tour?._id}`, { state: { guestCount } });
  };

  return (
    <div className="lg:w-1/3">
      <div className=" border rounded-md h-fit p-10">
        <p className="text-muted-foreground flex items-center gap-2">
          From{" "}
          <span className="text-primary text-xl font-bold flex items-center gap-0.5">
            <TKIcon width={14} /> {tour.costFrom}
          </span>
        </p>

        <div className="border rounded mt-8 py-3 px-5">
          <span className="font-semibold">Date</span>
          <p className="text-muted-foreground text-sm mt-1">
            {format(tour.startDate, "MMMM dd")} -{" "}
            {format(tour.endDate, "MMMM dd")}, {format(tour.updatedAt, "yyyy")}
          </p>
        </div>
        <div className="border rounded mt-5 py-3 px-5">
          <Popover>
            <PopoverTrigger className="flex flex-col items-start w-full cursor-pointer">
              <div className="flex justify-between w-full items-center">
                <p className="font-semibold">Total Guests</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-secondary-1 font-medium">
                  Click to edit
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                {guestCount} guests - Max Guests: {tour.maxGuest}
              </p>
            </PopoverTrigger>
            <PopoverContent className="my-5 shadow-2xl">
              <div className="flex items-center justify-center space-x-5 py-3">
                {/* Decrement Button */}
                <Button
                  onClick={decrement}
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 p-1.5 text-secondary-1 border rounded border-secondary-1! bg-white! hover:bg-secondary-1! hover:text-white"
                  disabled={guestCount <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                {/* Guest Count Display */}
                <span className="w-9 text-center font-bold text-xl text-primary select-none">
                  {guestCount}
                </span>

                {/* Increment Button */}
                <Button
                  onClick={increment}
                  size="icon"
                  className="h-9 w-9 p-1.5 text-secondary-1 border rounded border-secondary-1 bg-white hover:bg-secondary-1 hover:text-white"
                  disabled={guestCount >= tour.maxGuest}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button
          onClick={navigateToConfirmBooking}
          className="w-full py-8 font-semibold text-base bg-secondary-1 rounded-sm mt-5 cursor-pointer"
        >
          Book Now
        </Button>
      </div>

      <p className="p-9 text-wrap text-muted-foreground text-sm">
        Not sure? You can cancel this reservation up to 24 hours in advance for
        a full refund.
      </p>
    </div>
  );
};

export default BookingCard;
