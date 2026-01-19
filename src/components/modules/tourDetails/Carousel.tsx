import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TProps = {
  images: string[];
};

const ImageCarousel = ({ images }: TProps) => {
  return (
    <div className=" rounded-md">
      <Carousel>
        <CarouselContent>
          {images?.map((image: string) => (
            <CarouselItem key={image}>
              <img
                src={image}
                alt="img"
                className="h-[490px] w-full rounded-md object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white! border-none backdrop-blur-md shadow-md hover:bg-secondary-1! hover:text-white p-6 transition-colors" />
        <CarouselNext className="right-4 bg-white! border-none backdrop-blur-md shadow-md hover:bg-secondary-1! hover:text-white p-6 transition-colors" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
