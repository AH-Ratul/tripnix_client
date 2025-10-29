import TourCard from "@/components/modules/TourPage/TourCard";
import Loader from "@/components/shared/Loader/Loader";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";

const Tours = () => {
  const { data, isLoading } = useGetAllTourQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      <TourCard tourData={data} />
    </div>
  );
};

export default Tours;
