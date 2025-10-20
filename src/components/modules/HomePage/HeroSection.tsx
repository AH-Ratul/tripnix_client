import { useEffect, useState } from "react";
import bg1 from "../../../assets/images/bg1.jpg";
import bg2 from "../../../assets/images/bg2.jpg";
import { Search } from "lucide-react";

export const HeroSection = () => {
  const images = [bg1, bg2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full py-2 h-[470px] flex items-center justify-center overflow-hidden">
      {/* Background Images with smooth transition */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            style={{ backgroundImage: `url(${image})` }}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out
              ${
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }
            `}
          ></div>
        ))}
        {/* Pulsing overlay for a stunning effect */}
        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm animate-pulse-slow"></div>
      </div>

      {/* Main content section */}
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h1 className="mb-6 text-2xl text-white font-bold tracking-tight text-pretty lg:text-5xl">
                Start Your Next Trip
              </h1>
              <p className="mx-auto max-w-3xl text-white font-semibold lg:text-xl">
                Find your perfect adventure with our curated selection of tours.
              </p>

              {/* Search box with an inner-glow effect */}
              <div className="mt-8 flex justify-center w-full max-w-md mx-auto px-3 sm:px-0">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for a tour or place..."
                    className="w-full px-6 py-2 rounded-full text-lg text-muted-foreground bg-white border border-white/20 focus:outline-none focus:ring-4 focus:ring-primary transition-all duration-300 ease-in-out shadow-lg"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Search className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <a
                  href="#explore"
                  className="px-8 py-3 rounded-full font-semibold text-lg bg-primary text-white shadow-xl hover:bg-primary transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
