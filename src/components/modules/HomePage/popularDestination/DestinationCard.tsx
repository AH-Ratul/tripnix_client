type TProps = {
  country?: string;
  place?: string;
  image?: string;
};

const DestinationCard = ({ country, place, image }: TProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-sm"
      style={{ minHeight: 250 }}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out will-change-[transform] transform hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 p-6 z-10 flex flex-col justify-between">
        <p className="text-sm rounded-full px-3 py-1 font-semibold text-white bg-coquelicot/90 w-fit">
          {country}
        </p>

        <p className="text-3xl font-extrabold text-white leading-tight">
          {place}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
