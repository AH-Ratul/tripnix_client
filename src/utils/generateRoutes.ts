import type { IRouteItem } from "@/types";

export const generateRoutes = (routeItems: IRouteItem[]) => {
  return routeItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
    }))
  );
};
