import { Outlet, useLocation } from "react-router-dom";
import BasePage from "./layouts/BasePage";
import HomeRoute from "./pages/HomeRoute";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return (
      <BasePage>
        <HomeRoute />
      </BasePage>
    );
  } else {
    return (
      <BasePage>
        <Outlet />
      </BasePage>
    );
  }
}
export default App;
