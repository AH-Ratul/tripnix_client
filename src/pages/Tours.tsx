import TourCard from "@/components/modules/TourPage/TourCard";
import TourFilters from "@/components/modules/TourPage/TourFilters";
import Loader from "@/components/shared/Loader/Loader";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";
import { useSearchParams } from "react-router";

const Tours = () => {
  const [searchParams] = useSearchParams();

  const division = searchParams.get("division") || undefined;
  const tourType = searchParams.get("tourType") || undefined;

  const { data, isLoading } = useGetAllTourQuery({
    division,
    tourType,
  });

  if (isLoading) {
    return (
      <div className="h-dvh flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-3 my-8 ">
      <div className="flex flex-col lg:flex-row  gap-6">
        <TourFilters />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <TourCard tourData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
