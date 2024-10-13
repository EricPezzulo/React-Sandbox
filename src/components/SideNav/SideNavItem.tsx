import classNames from "classnames";
import React from "react";
import { SiteMapType } from "./SideNav";

interface SideNavItemProps {
  title: string;
  path: string;
  icon: React.ReactElement;
  setSiteMap: React.Dispatch<React.SetStateAction<SiteMapType>>;
}

const SideNavItem: React.FC<SideNavItemProps> = ({
  title,
  path,
  icon,
  //   setSiteMap,
}) => {
  const selectedClass = classNames(
    "group flex p-2 hover:cursor-pointer hover:bg-slate-200 bg-slate-100 w-full",
  );

  return (
    <button type="button" className={selectedClass}>
      <a className="flex w-full flex-row items-center gap-2" href={path}>
        <div className="text-slate-700 group-hover:text-black">{icon}</div>
        <div>
          <p className="text-slate-700 group-hover:text-black">{title}</p>
        </div>
      </a>
    </button>
  );
};

export default SideNavItem;
