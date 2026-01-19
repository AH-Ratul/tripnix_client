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
    }),
  );

  const tourTypeOptions = tourTypeData?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    }),
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
    <div className="w-full lg:sticky lg:top-28">
      <div className="bg-white/90 backdrop-blur border shadow-xs rounded-md p-5 lg:p-7 space-y-6">
        {/* === Header === */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Filter Tours</h1>

          <Button
            onClick={handleClear}
            variant="outline"
            className="h-8 px-4 text-sm border-primary text-primary transition"
          >
            Clear
          </Button>
        </div>

        {/* === Tour Type Filter === */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Tour Type</label>

          <Select
            onValueChange={handleTourTypeChange}
            value={selectedTourType ?? ""}
            disabled={tourTypeLoading}
          >
            <SelectTrigger className="w-full rounded-lg bg-white shadow-none focus:ring-2 focus:ring-primary/30">
              <SelectValue placeholder="Select tour type" />
            </SelectTrigger>

            <SelectContent className="rounded-lg">
              <SelectGroup>
                {tourTypeOptions?.map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* === Division Filter === */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Division</label>

          <Select
            onValueChange={handleDivisionChange}
            value={selectedDivision ?? ""}
            disabled={divisionLoading}
          >
            <SelectTrigger className="w-full rounded-lg bg-white shadow-none focus:ring-2 focus:ring-primary/30">
              <SelectValue placeholder="Select division" />
            </SelectTrigger>

            <SelectContent className="rounded-lg">
              <SelectGroup>
                {divisionOptions?.map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TourFilters;
