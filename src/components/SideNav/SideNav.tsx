import { ChildCare, FlightClass, Home } from "@mui/icons-material";
import SideNavItem from "./SideNavItem";
import { useState } from "react";

const SideNav = () => {
  const [siteMap, setSiteMap] = useState<SiteMapType>([
    { path: "/", title: "Home", icon: <Home /> },
    { path: "/child", title: "Child", icon: <ChildCare /> },
    { path: "/firstRoute", title: "First Route", icon: <FlightClass /> },
  ]);
  return (
    <nav className="flex min-h-0 w-64 flex-shrink-0 flex-col border-r border-slate-300 bg-slate-100">
      <div className="flex-1 overflow-hidden">
        {siteMap.map((location, index) => (
          <SideNavItem
            key={index}
            setSiteMap={setSiteMap}
            title={location.title}
            path={location.path}
            icon={location.icon}
          />
        ))}
      </div>
    </nav>
  );
};

export default SideNav;

export type SiteMapType = PathType[];

interface PathType {
  path: string;
  title: string;
  icon: React.ReactElement;
}
