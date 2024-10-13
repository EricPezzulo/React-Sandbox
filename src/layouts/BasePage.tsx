import Header from "../components/Header/Header";
import SideNav from "../components/SideNav/SideNav";

const BasePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex min-h-0 flex-1 flex-row overflow-hidden bg-white">
        <SideNav />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default BasePage;
