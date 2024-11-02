import { siteMap } from "../../app/app.siteMap";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  return (
    <nav className="hidden min-h-0 w-64 flex-shrink-0 flex-col border-r border-slate-300 bg-slate-100 sm:flex">
      <div className="flex-1 overflow-hidden">
        {siteMap.map((location, index) => (
          <SideNavItem
            key={index}
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
