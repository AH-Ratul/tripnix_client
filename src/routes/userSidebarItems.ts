import type { IRouteItem } from "@/types";
import { lazy } from "react";

const Bookings = lazy(() => import("@/pages/User/Bookings"));

export const userSidebarItems: IRouteItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        component: Bookings,
      },
    ],
  },
];
