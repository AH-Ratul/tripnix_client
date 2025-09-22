import { Button } from "@/components/ui/button";
import { useGetAllTourQuery } from "@/redux/features/tour/tour.api";
import { Link } from "react-router";

const Tours = () => {
  const { data: tourData, isLoading } = useGetAllTourQuery(undefined);
  console.log(tourData);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto">
      <h1>All Tours</h1>
      <div>
        {tourData?.map((tour: any) => (
          <div key={tour._id} className="border p-2 m-2">
            <p>Title: {tour.title}</p>

            <Button asChild>
                <Link to={`/tours/${tour._id}`}>View Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
