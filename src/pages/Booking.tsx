import { Button } from "@/components/ui/button";
import TKIcon from "@/assets/icons/TK";
import { useState } from "react";
import { Minus, Plus, Users } from "lucide-react";
import { useParams } from "react-router";
import { useGetSingleTourQuery } from "@/redux/features/tour/tour.api";
import Loader from "@/components/shared/Loader/Loader";
import { useCreateBookingMutation } from "@/redux/features/booking/booking.api";
import { toast } from "sonner";

const Booking = () => {
  const [guestCount, setGuestCount] = useState(1);

  const { id } = useParams();
  const { data: tour, isLoading } = useGetSingleTourQuery(id);
  const [createBooking, { isLoading: bookingLoader }] =
    useCreateBookingMutation();

  const increment = () => {
    setGuestCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setGuestCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const totalAmount = tour?.costFrom * guestCount;

  const handleBooking = async () => {
    let booking;
    if (tour) {
      booking = {
        tour: id,
        guestCount: guestCount,
      };
    }

    try {
      const res = await createBooking(booking).unwrap();

      if (res.success) {
        window.open(res.data.paymentURL);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center my-12 md:mt-16 px-4 md:px-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-3xl transition-shadow duration-300">
        <div className="mx-5 mt-5 flex items-center gap-2">
          <img
            src={tour.images[0]}
            alt="img"
            className="w-14 h-14 rounded-full"
          />
          <h1 className="font-bold">{tour.title}</h1>
        </div>

        {/* === 1. Header and Price Section === */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg text-gray-600 mb-1 font-medium">
            Starting From
          </h3>

          <div className="flex items-end gap-1">
            <p className="flex items-center gap-1 font-extrabold text-4xl text-gray-900">
              <TKIcon height={32} width={22} className="text-primary-600" />
              {tour.costFrom}
            </p>
            <span className="text-base text-muted-foreground font-medium">
              /person
            </span>
          </div>
          {/* Placeholder for rating/reviews if available */}
          <div className="text-sm text-gray-500 mt-2">
            Max Guests: {tour.maxGuest}
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          {/* Guest Counter */}
          <div className="flex items-center justify-between pt-2">
            <p className="font-semibold text-gray-700 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary-500" />
              Total Guests:
            </p>

            <div className="flex items-center space-x-3">
              {/* Decrement Button */}
              <Button
                onClick={decrement}
                variant="outline"
                size="icon"
                className="h-8 w-8 p-1.5"
                disabled={guestCount <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>

              {/* Guest Count Display */}
              <span className="w-8 text-center font-bold text-lg text-gray-900">
                {guestCount}
              </span>

              {/* Increment Button */}
              <Button
                onClick={increment}
                size="icon"
                className="h-8 w-8 p-1.5 bg-primary hover:bg-primary/90"
                disabled={guestCount >= tour.maxGuest}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Max Guest Warning */}
          <p className="text-xs text-red-500 text-right h-4">
            {guestCount >= tour.maxGuests
              ? `Max guests per booking reached (${tour.maxGuests})`
              : ""}
          </p>
        </div>

        {/* === 3. Total Summary and Action === */}
        <div className="p-6">
          {/* Total Amount Display */}
          <div className="flex justify-between items-center text-gray-800 mb-4">
            <span className="text-xl font-bold">Total Amount</span>
            <span className="flex gap-1 items-center text-2xl font-extrabold text-primary-700">
              <TKIcon height={30} width={15} />
              {totalAmount.toFixed(2)} {/* Format to two decimal places */}
            </span>
          </div>

          {/* Booking Button */}
          <Button onClick={handleBooking} className="w-full">
            {bookingLoader ? <Loader /> : "Confirm Booking"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
