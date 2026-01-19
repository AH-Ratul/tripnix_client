import { Headset, ShieldCheck } from "lucide-react";
import bg from "../assets/images/bg.jpg";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="space-y-24 font-jost">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-primary-600 py-32 px-6 md:px-16 text-center md:text-left rounded-b-3xl">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Explore the World with Tripnix
            </h1>
            <p className="text-lg md:text-xl">
              Discover amazing tours, unforgettable experiences, and adventures
              tailored just for you.
            </p>
            <Button className="bg-secondary-1 hover:bg-secondary-2 px-6 py-3 text-lg font-semibold">
              Explore Tours
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src={bg}
              alt="Travel Adventure"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 space-y-10 text-center md:text-left">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Tripnix exists to make travel seamless, safe, and memorable. We
            empower travelers to explore the world confidently.
          </p>
        </div>

        <div className="space-y-4 mt-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-gray-700 text-lg md:text-xl">
            To become the most trusted tour booking platform globally,
            connecting people with extraordinary experiences and local
            adventures.
          </p>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16 space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose Tripnix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transform transition">
              <ShieldCheck className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">
                Your payments and personal data are fully protected with
                state-of-the-art security protocols.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transform transition">
              <Headset className="mx-auto mb-4 w-16 h-16" />

              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is always available to assist you before,
                during, and after your tours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transform transition">
              <img
                src={bg}
                alt="Customized Tours"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold mb-2">Customized Tours</h3>
              <p className="text-gray-600">
                Tailor your journey exactly the way you want, from destinations
                to activities and accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold">Choose Your Tour</h3>
            <p className="text-gray-600">
              Browse our curated selection of tours and pick the perfect
              adventure for you.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold">Book Instantly</h3>
            <p className="text-gray-600">
              Secure your spot with a few clicks and receive instant booking
              confirmation.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold">Enjoy Your Trip</h3>
            <p className="text-gray-600">
              Travel stress-free and experience unforgettable memories with
              Tripnix.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16 space-y-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Alice Johnson", "Bob Smith", "Carol White"].map((name) => (
              <div
                key={name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition text-center"
              >
                <img
                  src={bg}
                  alt={name}
                  className="mx-auto w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">Travel Expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Call To Action ===== */}
      <section className="py-20 bg-primary-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Explore?
        </h2>
        <p className="text-lg mb-6">
          Start planning your next adventure with Tripnix today!
        </p>
        <Button className="bg-secondary-1 hover:bg-secondary-2 px-8 py-4 text-lg font-semibold">
          Explore Tours
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
