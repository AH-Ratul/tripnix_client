import MultipleImageUploader from "@/components/MultipleImageUploader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { FileMetadata } from "@/hooks/use-file-upload";
import { cn } from "@/lib/utils";
import { useGetDivisionQuery } from "@/redux/features/division/division.api";
import {
  useAddTourMutation,
  useGetTourTypeQuery,
} from "@/redux/features/tour/tour.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, formatISO } from "date-fns";
import { CalendarIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  useFieldArray,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  costFrom: z.string().min(1, "Cost is required"),
  startDate: z.date({ message: "Start date is required" }),
  endDate: z.date({ message: "End date is required" }),
  departureLocation: z.string().min(1, "Departure location is required"),
  arrivalLocation: z.string().min(1, "Arrival location is required"),
  included: z.array(z.object({ value: z.string() })),
  excluded: z.array(z.object({ value: z.string() })),
  amenities: z.array(z.object({ value: z.string() })),
  tourPlan: z.array(z.object({ value: z.string() })),
  maxGuest: z.string().min(1, "Max guest is required"),
  minAge: z.string().min(1, "Minimum age is required"),
  division: z.string().min(1, "Division is required"),
  tourType: z.string().min(1, "Tour type is required"),
});

const AddTour = () => {
  const [images, setImages] = useState<(File | FileMetadata)[] | []>([]);

  const { data: divisionData, isLoading: divisionLoading } =
    useGetDivisionQuery(undefined);
  const { data: tourTypeData, isLoading: tourTypeLoading } =
    useGetTourTypeQuery(undefined);
  const [addTour] = useAddTourMutation(undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      costFrom: "",
      startDate: new Date(),
      endDate: new Date(),
      departureLocation: "",
      arrivalLocation: "",
      division: "",
      tourType: "",
      maxGuest: "",
      minAge: "",
      description: "",
      included: [{ value: "" }],
      excluded: [{ value: "" }],
      amenities: [{ value: "" }],
      tourPlan: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "included",
  });

  const {
    fields: excludedFields,
    append: excludedAppend,
    remove: excludedRemove,
  } = useFieldArray({
    control: form.control,
    name: "excluded",
  });

  const {
    fields: amenitiesFields,
    append: amenitiesAppend,
    remove: amenitiesRemove,
  } = useFieldArray({
    control: form.control,
    name: "amenities",
  });

  const {
    fields: tourPlanFields,
    append: tourPlanAppend,
    remove: tourPlanRemove,
  } = useFieldArray({
    control: form.control,
    name: "tourPlan",
  });

  const divisionOptions = divisionData?.map(
    (item: { _id: string; name: string }) => ({
      value: item._id,
      label: item.name,
    })
  );

  const tourTypeOptions = tourTypeData?.map(
    (item: { _id: string; name: string }) => ({
      value: item._id,
      label: item.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const tourData = {
      ...data,
      costFrom: Number(data.costFrom),
      minAge: Number(data.minAge),
      maxGuest: Number(data.maxGuest),
      startDate: formatISO(data.startDate),
      endDate: formatISO(data.endDate),
      included: data.included.map((item: { value: string }) => item.value),
      excluded: data.excluded.map((item: { value: string }) => item.value),
      amenities: data.excluded.map((item: { value: string }) => item.value),
      tourPlan: data.excluded.map((item: { value: string }) => item.value),
    };

    const formData = new FormData();

    formData.append("data", JSON.stringify(tourData));
    images.forEach((image) => formData.append("files", image as File));

    try {
      const res = await addTour(formData).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastId });
        form.reset();
      }
    } catch (err: any) {
      console.log(err);

      if (err) {
        toast.error(err.data.message, { id: toastId });
      } else if (err.data === "Network Error") {
        toast.error(err.data, { id: toastId });
      } else {
        toast.error("Server is unreachable or timed out.", { id: toastId });
      }
    }
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-2 mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Tour</CardTitle>
          <CardDescription>Add a new tour to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="add-tour-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* --------------- TITLE --------------- */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Title*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* --------------- LOCATION & COSTFROM --------------- */}
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Location*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="costFrom"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Cost From*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* --------------- START & END DATE --------------- */}
              <div className="flex gap-5 w-full">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date <
                              new Date(
                                new Date().setDate(new Date().getDate() - 1)
                              )
                            }
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date <
                              new Date(
                                new Date().setDate(new Date().getDate() - 1)
                              )
                            }
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* --------------- DEPURTURE & ARRIVAL LOCATION --------------- */}
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="departureLocation"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Depurture Location*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="arrivalLocation"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Arrival Location*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* --------------- DIVISION & TOUR TYPE --------------- */}
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="division"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Division*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={divisionLoading}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Division" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {divisionOptions?.map(
                            (item: { label: string; value: string }) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tourType"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Tour Type*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={tourTypeLoading}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="tour type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {tourTypeOptions?.map(
                            (item: { label: string; value: string }) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* --------------- MAX GUEST & MIN AGE --------------- */}
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="maxGuest"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Max Guest*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="minAge"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Minimum Age*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* --------------- DESCRIPTION --------------- */}
              <div className="flex gap-3 items-stretch">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="h-[200px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex-1">
                  <MultipleImageUploader onChange={setImages} />
                </div>
              </div>

              {/* --------------- INCLUDED --------------- */}
              <div className="border-t border-muted w-full">
                <Button
                  type="button"
                  onClick={() => append({ value: "" })}
                  className="mt-2"
                >
                  Add Includes
                </Button>
                <div className="space-y-1">
                  {fields.map((item, index) => (
                    <div key={item.id} className="flex gap-2 my-2">
                      <FormField
                        control={form.control}
                        name={`included.${index}.value`}
                        key={item.id}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        onClick={() => remove(index)}
                        variant={"destructive"}
                        size={"icon"}
                        type="button"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* ----------- EXCLUDED ---------------- */}
              <div className="border-t border-muted w-full">
                <Button
                  type="button"
                  onClick={() => excludedAppend({ value: "" })}
                  className="mt-2"
                >
                  Add Excluded
                </Button>
                <div className="space-y-1">
                  {excludedFields.map((item, index) => (
                    <div key={item.id} className="flex gap-2 my-2">
                      <FormField
                        control={form.control}
                        name={`excluded.${index}.value`}
                        key={item.id}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        onClick={() => excludedRemove(index)}
                        variant={"destructive"}
                        size={"icon"}
                        type="button"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* -------------- Amenities ------------- */}
              <div className="border-t border-muted w-full">
                <Button
                  type="button"
                  onClick={() => amenitiesAppend({ value: "" })}
                  className="mt-2"
                >
                  Add Amenities
                </Button>
                <div className="space-y-1">
                  {amenitiesFields.map((item, index) => (
                    <div key={item.id} className="flex gap-2 my-2">
                      <FormField
                        control={form.control}
                        name={`amenities.${index}.value`}
                        key={item.id}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        onClick={() => amenitiesRemove(index)}
                        variant={"destructive"}
                        size={"icon"}
                        type="button"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* ----------- TOUR PLAN ------------- */}
              <div className="border-t border-muted w-full">
                <Button
                  type="button"
                  onClick={() => tourPlanAppend({ value: "" })}
                  className="mt-2"
                >
                  Add Tour Plan
                </Button>
                <div className="space-y-1">
                  {tourPlanFields.map((item, index) => (
                    <div key={item.id} className="flex gap-2 my-2">
                      <FormField
                        control={form.control}
                        name={`tourPlan.${index}.value`}
                        key={item.id}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        onClick={() => tourPlanRemove(index)}
                        variant={"destructive"}
                        size={"icon"}
                        type="button"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            type="submit"
            form="add-tour-form"
            className="w-32 cursor-pointer"
          >
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddTour;
