import { AddTourTypeModal } from "@/components/modules/Admin/TourType/AddTourTypeModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import { Edit, Trash } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypeQuery(undefined);
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal />
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((type: { name: string; _id: string }) => (
              <TableRow key={type._id}>
                <TableCell className="font-medium w-full">
                  {type.name}
                </TableCell>
                <TableCell>
                  <Button
                    size={"sm"}
                    className="cursor-pointer hover:bg-chart-2"
                  >
                    <Edit />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    size={"sm"}
                    className="cursor-pointer hover:bg-destructive"
                  >
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddTourType;
