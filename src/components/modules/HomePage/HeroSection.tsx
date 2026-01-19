import bg from "../../../assets/images/bg.jpg";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 h-screen">
        <img
          src={bg}
          alt="hero background"
          className="absolute inset-0 object-cover object-center w-full h-screen transition-opacity duration-1000 will-change-transform"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/50"></div>
      </div>

      {/* Main Content - Minimal re-renders because there's no state change here */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col items-center]"
        >
          <div className="flex flex-col items-center gap-6 text-center mt-24">
            <h1 className="mb-2 text-3xl text-white font-bold lg:text-7xl drop-shadow-2xl font-jost">
              Start Your Next Trip
            </h1>
            <p className="mx-auto max-w-3xl text-white font-medium lg:text-sm drop-shadow-md">
              Find your perfect adventure with our curated selection of tours.
            </p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 w-full max-w-2xl mx-auto"
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search for a tour or place..."
                  className="w-full px-6 py-6 rounded-full text-base bg-white/95 focus:ring-4 focus:ring-primary/50 outline-none shadow-2xl"
                />
                <button className="flex items-center bg-secondary-1 font-semibold absolute gap-2 top-2 right-3 rounded-full text-white py-4 px-6 text-base cursor-pointer hover:bg-primary hover:transform hover:transition hover:duration-200 hover:ease-in-out">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
