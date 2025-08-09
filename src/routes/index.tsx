import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        {
            path: "about",
            Component: About
        }
    ]
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [

    ]
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/register",
    Component: Register
  }
]);
