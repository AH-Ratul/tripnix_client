import { Input } from "@/components/ui/input";
import newsIcon from "../../../assets/images/news.png";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Subscription = () => {
  return (
    <div className="w-full bg-primary/90 text-white mt-32 font-jost">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 xl:px-20 py-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left xl:w-1/2">
            <img src={newsIcon} alt="news" className="w-16 h-16" />
            <div>
              <p className="text-xl sm:text-2xl font-semibold pb-2">
                Your Travel Journey Starts Here
              </p>
              <p className="text-sm sm:text-base">
                Sign up and we'll send the best deals to you
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 xl:w-1/2">
            <Input
              placeholder="Your email"
              className="bg-white! text-black rounded-lg border-none w-full px-5 py-7 focus:ring-0"
            />
            <Button
              onClick={() => toast.info("Working on...")}
              className="bg-secondary-1 hover:bg-secondary-2 rounded-lg px-6 py-7 font-semibold text-base w-full sm:w-auto cursor-pointer"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
