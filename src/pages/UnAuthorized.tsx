import { NavLink } from "react-router";

const UnAuthorized = () => {
  return (
    <div>
      <h1>You are UnAuthorized to access the page</h1>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default UnAuthorized;
