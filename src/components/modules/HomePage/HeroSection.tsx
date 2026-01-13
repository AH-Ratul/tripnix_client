import { useMemo } from "react";
import bg1 from "../../../assets/images/bg1.jpg";
import bg2 from "../../../assets/images/bg2.jpg";
import { Search } from "lucide-react";

export const HeroSection = () => {
  const images = useMemo(() => [bg1, bg2], []);

  return (
    <section className="relative w-full h-[470px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slideshow - CSS Only Logic for extreme performance */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: 0,
              animation: `crossfade ${images.length * 10}s infinite`,
              animationDelay: `${index * 10}s`,
              transform: "translateZ(0)", // Hardware acceleration
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]"></div>
      </div>

      {/* Main Content - Minimal re-renders because there's no state change here */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="mb-6 text-3xl text-white font-bold lg:text-6xl drop-shadow-2xl">
              Start Your Next Trip
            </h1>
            <p className="mx-auto max-w-3xl text-white font-semibold lg:text-xl drop-shadow-md">
              Find your perfect adventure with our curated selection of tours.
            </p>

            {/* Search Box */}
            <div className="mt-8 w-full max-w-md mx-auto">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search for a tour or place..."
                  className="w-full px-6 py-3 rounded-full text-lg bg-white/95 focus:ring-4 focus:ring-primary/50 outline-none shadow-2xl"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-6 h-6" />
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#explore"
                className="px-10 py-3 rounded-full font-bold text-lg bg-primary text-white hover:scale-105 transition-transform active:scale-95 inline-block"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Performance */}
      <style>{`
        @keyframes crossfade {
          0% { opacity: 0; transform: scale(1); }
          5% { opacity: 1; }
          45% { opacity: 1; }
          55% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};
