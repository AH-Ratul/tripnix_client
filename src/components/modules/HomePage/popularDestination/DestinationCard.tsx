type TProps = {
  country?: string;
  place?: string;
  image?: string;
};

const DestinationCard = ({ country, place, image }: TProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6"
      style={{ minHeight: 250 }}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="text-sm top-6 rounded-full px-3 py-1 font- my- absolute text-white bg-coquelicot">
        {country}
      </p>
      <p className="text-3xl font-bold mt-9 absolute text-white">{place}</p>
    </div>
  );
};

export default DestinationCard;
