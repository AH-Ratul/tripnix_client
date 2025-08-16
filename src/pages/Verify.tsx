import { Button } from "@/components/ui/button";
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
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your verification code must be 6 characters.",
  }),
});

const Verify = () => {
  const [confirmed, setConfirmed] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const handleConfirmed = () => {
    setConfirmed(true);
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);

    form.reset();
  };

  //! Needed - Turned off for development
  //   useEffect(() => {
  //     if (!email) {
  //       navigate("/");
  //     }
  //   }, [email]);
  return (
    <div className="grid place-content-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md animate-fade-in-up">
        {confirmed ? (
          <Card className="rounded-xl border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight">
                Verify Your Account
              </CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">
                Enter the 6-digit code sent to your email.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex justify-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={4} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full cursor-pointer">
                    Verify
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-gray-500 dark:text-gray-400">
              Didn't receive a code?
              <Button
                variant="link"
                className="text-foreground p-1 h-auto ml-1 cursor-pointer"
              >
                Resend
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Verify your email address
              </CardTitle>
              <CardDescription>
                We will send you an OTP at <br />
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button onClick={handleConfirmed} className="w-[300px]">
                Confirm
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Verify;
