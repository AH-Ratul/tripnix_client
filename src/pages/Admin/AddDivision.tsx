import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import AddDivisionModal from "@/components/modules/Admin/Division/AddDivisionModal";
import Loader from "@/components/shared/Loader/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetDivisionQuery,
  useRemoveDivisionMutation,
} from "@/redux/features/division/division.api";
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";

const AddDivision = () => {
  const { data, isLoading } = useGetDivisionQuery(undefined);
  const [removeDivision] = useRemoveDivisionMutation();

  const handleRemoveDivision = async (divisionId: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      const res = await removeDivision(divisionId).unwrap();

      if (res.success) {
        toast.success(res.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-xl font-semibold">Divisions</h1>
        <AddDivisionModal />
      </div>
      {isLoading ? <Loader /> : ""}
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Division</TableHead>
              <TableHead className="w-[100px]">Description</TableHead>
              <TableHead>Action</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.map(
              (division: {
                name: string;
                description: string;
                _id: string;
              }) => (
                <TableRow key={division._id}>
                  <TableCell className="font-medium w-full">
                    {division.name}
                  </TableCell>
                  <TableCell className="font-medium w-full text-wrap">
                    {division.description}
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
                    <DeleteConfirmation
                      onConfirm={() => handleRemoveDivision(division._id)}
                    >
                      <Button
                        size={"sm"}
                        className="cursor-pointer hover:bg-destructive"
                      >
                        <Trash />
                      </Button>
                    </DeleteConfirmation>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddDivision;
