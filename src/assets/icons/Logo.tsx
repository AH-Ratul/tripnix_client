import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="font-bold text-2xl text-primary">TripNix</h1>
      </Link>
    </div>
  );
};

export default Logo;
