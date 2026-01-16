import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="font-bold tracking-wide text-3xl font-jost">
          TripNix
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
