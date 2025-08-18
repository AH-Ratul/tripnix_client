import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddTourTypeMutation } from "@/redux/features/tour/tour.api";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddTourTypeModal() {
  const form = useForm();
  const [addTourType, { isLoading }] = useAddTourTypeMutation(undefined);

  const onSubmit = async (data) => {
    try {
      const res = await addTourType({ name: data.name }).unwrap();

      if (res.success) {
        form.reset();
        toast.success("Tour Type Added");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Add Tour Type
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Tour Type</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new tour type.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id="add-tour-type" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Tour Type Name"
                      type="text"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button form="add-tour-type" type="submit" className="cursor-pointer">
            {isLoading ? "Adding.." : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
