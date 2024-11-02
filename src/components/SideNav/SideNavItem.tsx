import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";

interface SideNavItemProps {
  title: string;
  path: string;
  icon: React.ReactElement;
  // setSiteMap: React.Dispatch<React.SetStateAction<SiteMapType>>;
}

const SideNavItem: React.FC<SideNavItemProps> = ({ title, path, icon }) => {
  const navigate = useNavigate();
  const selectedClass = classNames(
    "group flex p-2 hover:cursor-pointer hover:bg-slate-200 bg-slate-100 w-full",
  );
  const handleNavigateClick = () => {
    navigate(`${path}`);
  };

  return (
    <button
      type="button"
      className={selectedClass}
      onClick={handleNavigateClick}
    >
      <div className="flex w-full flex-row items-center gap-2">
        <div className="text-slate-700 group-hover:text-black">{icon}</div>
        <div>
          <p className="text-slate-700 group-hover:text-black">{title}</p>
        </div>
      </div>
    </button>
  );
};

export default SideNavItem;
