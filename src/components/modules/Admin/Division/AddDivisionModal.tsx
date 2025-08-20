import SingleImageUploader from "@/components/SingleImageUploader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddDivisionModal = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [addDivision] = useAddDivisionMutation(undefined);

  const form = useForm();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Processing..");
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    formData.append("file", image as File);

    try {
      const res = await addDivision(formData).unwrap();

      if (res.success) {
        toast.success(res.message, { id: toastId });
        form.reset();
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
      toast.dismiss();
      toast.error(err?.data?.message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Add Division
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Division</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new division.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-2"
            id="add-division"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Label>Division</Label>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Division name"
                      type="text"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Label>Description</Label>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
          <SingleImageUploader onChange={setImage} />
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button form="add-division" type="submit" className="cursor-pointer">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDivisionModal;
