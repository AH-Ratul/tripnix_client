import { Button } from "@/components/ui/button";
import TKIcon from "@/assets/icons/TK";
import { Link, useLocation, useParams } from "react-router";
import { useGetSingleTourQuery } from "@/redux/features/tour/tour.api";
import Loader from "@/components/shared/Loader/Loader";
import { useCreateBookingMutation } from "@/redux/features/booking/booking.api";
import { toast } from "sonner";
import { format } from "date-fns";

const Booking = () => {
  const location = useLocation();

  const { id } = useParams();
  const { data: tour, isLoading } = useGetSingleTourQuery(id);
  const [createBooking, { isLoading: bookingLoader }] =
    useCreateBookingMutation();

  const guestCount = location?.state?.guestCount;

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
    return (
      <div className="h-dvh flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex justify-center my-36 px-4">
      <div className="w-full max-w-lg bg-white rounded-md shadow-md border overflow-hidden">
        {/* === Tour Header === */}
        <div className="flex gap-4 p-5 border-b">
          <img
            src={tour.images[0]}
            alt="tour"
            className="w-24 h-24 rounded-md object-cover"
          />
          <div>
            <Link
              to={`/tours/${tour._id}`}
              className="text-base font-bold text-gray-900 hover:underline"
            >
              {tour.title}
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              Max Guests: {tour.maxGuest}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Date: {format(tour.startDate, "MMMM dd")} -{" "}
              {format(tour.endDate, "MMMM dd")},{" "}
              {format(tour.updatedAt, "yyyy")}
            </p>
          </div>
        </div>

        {/* === Booking Overview === */}
        <div className="p-5 space-y-4">
          <h3 className="text-base font-semibold text-gray-800">
            Booking Overview
          </h3>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Guests</span>
            <span className="font-medium">{guestCount} person(s)</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Price per person</span>
            <span className="flex items-center gap-1 font-medium">
              <TKIcon height={16} width={12} />
              {tour.costFrom}
            </span>
          </div>

          <div className="border-t pt-3 flex justify-between text-sm text-gray-700">
            <span>Subtotal</span>
            <span className="flex items-center gap-1 font-semibold">
              <TKIcon height={16} width={12} />
              {(tour.costFrom * guestCount).toFixed(2)}
            </span>
          </div>
        </div>

        {/* === Total Amount === */}
        <div className="bg-gray-50 px-5 py-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">Total Amount</span>
          <span className="flex items-center gap-1 text-2xl font-extrabold text-primary-600">
            <TKIcon height={26} width={16} />
            {totalAmount.toFixed(2)}
          </span>
        </div>

        {/* === Action Button === */}
        <div className="p-5">
          <Button
            onClick={handleBooking}
            className="w-full py-6 text-base font-semibold bg-secondary-1 cursor-pointer transition rounded-sm"
          >
            {bookingLoader ? <Loader /> : "Confirm & Pay Securely"}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-3">
            By confirming, you agree to our terms & cancellation policy
          </p>
          <p className="text-xs text-gray-500 text-center mt-5 border-t pt-3">
            🔒 Secure payment powered by SSLCommerz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
