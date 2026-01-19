import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Subscription from "../modules/subscription/Subscription";
import { useLocation } from "react-router";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  const route = useLocation();
  const pathname = route.pathname.startsWith("/booking");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow-1">
        {children}
        {!pathname && <Subscription />}
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
