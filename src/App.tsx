import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </>
  );
}

export default App;
