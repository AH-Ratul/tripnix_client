import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetDivisionQuery } from "@/redux/features/division/division.api";
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import { useSearchParams } from "react-router";

const TourFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedDivision = searchParams.get("division") || undefined;
  const selectedTourType = searchParams.get("tourType") || undefined;

  const { data: divisionData, isLoading: divisionLoading } =
    useGetDivisionQuery(undefined);
  const { data: tourTypeData, isLoading: tourTypeLoading } =
    useGetTourTypeQuery(undefined);

  const divisionOptions = divisionData?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    })
  );

  const tourTypeOptions = tourTypeData?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    })
  );

  const handleDivisionChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("division", value);
    setSearchParams(params);
  };

  const handleTourTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tourType", value);
    setSearchParams(params);
  };

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("division");
    params.delete("tourType");
    setSearchParams(params);
  };
  return (
    <div className="border h-fit bg-white p-3 rounded-md shadow-md md:w-[500px]">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-lg">Filter</h1>
        <Button onClick={handleClear} variant="outline">
          Clear
        </Button>
      </div>

      <div className="mt-7">
        <Select
          onValueChange={handleTourTypeChange}
          value={selectedTourType ? selectedTourType : ""}
          disabled={tourTypeLoading}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tour Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {tourTypeOptions?.map(
                (item: { value: string; label: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <Select
          onValueChange={handleDivisionChange}
          value={selectedDivision ? selectedDivision : ""}
          disabled={divisionLoading}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Division" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {divisionOptions?.map(
                (item: { value: string; label: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TourFilters;
