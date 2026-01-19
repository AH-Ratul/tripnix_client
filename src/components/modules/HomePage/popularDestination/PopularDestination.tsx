import { popularDestinations } from "@/lib/data/popularDestinations";
import DestinationCard from "./DestinationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const containerVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PopularDestination = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="will-change-transform"
    >
      <div className="container mx-auto mt-28 mb-10 px-3 lg:px-16">
        {/* Header */}
        <div className="font-jost mb-10">
          <h1 className="text-3xl font-semibold text-primary leading-tight">
            Popular Destinations
          </h1>
          <p className="mt-4  text-muted-foreground">
            These popular destinations have a lot to offer
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-4 py-4">
            {popularDestinations?.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-[280px]">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="will-change-transform"
                >
                  <DestinationCard item={item} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="hidden sm:flex left-3 bg-white! border-none backdrop-blur-md shadow-md hover:bg-secondary-1! hover:text-white p-6 transition-colors" />
          <CarouselNext className="hidden sm:flex right-3 bg-white! border-none backdrop-blur-md shadow-md hover:bg-secondary-1! hover:text-white p-6 transition-colors" />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default PopularDestination;
