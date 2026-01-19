import { memo } from "react";

const DestinationCard = ({ item }: any) => {
  return (
    <div className="group relative overflow-hidden rounded shadow-sm h-[350px] w-64 select-none">
      <img
        src={item.image}
        alt={item.place}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

      <div className="absolute bottom-4 left-5 right-5 z-10">
        <p className="text-3xl font-extrabold text-white leading-tight drop-shadow-md">
          {item.place}
        </p>
      </div>
    </div>
  );
};

export default memo(DestinationCard);
