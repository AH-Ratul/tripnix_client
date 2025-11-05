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
    <div className="mx-12 rounded-md">
      <Carousel>
        <CarouselContent>
          {images?.map((image: string) => (
            <CarouselItem key={image}>
              <img src={image} alt="img" className="h-80 w-full rounded-md" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
