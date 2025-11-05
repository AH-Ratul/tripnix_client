import TourCard from "@/components/modules/TourPage/TourCard";
import TourFilters from "@/components/modules/TourPage/TourFilters";
import Loader from "@/components/shared/Loader/Loader";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";
import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  const division = searchParams.get("division") || undefined;
  const tourType = searchParams.get("tourType") || undefined;

  const { data, isLoading } = useGetAllTourQuery({
    division,
    tourType,
    limit: 9,
    page: currentPage,
  });
  
  const totalPage = data?.meta?.totalPage;

  if (isLoading) {
    return (
      <div className="h-dvh flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-3 my-8">
      <div className="flex flex-col lg:flex-row  gap-6">
        <TourFilters />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <TourCard tourData={data?.data} />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-45"
                      : "cursor-pointer"
                  }
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>{currentPage}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className={
                    currentPage === totalPage
                      ? "pointer-events-none opacity-45"
                      : "cursor-pointer"
                  }
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Tours;
