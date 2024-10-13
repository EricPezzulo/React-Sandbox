import { Outlet, useLocation } from "react-router-dom";
import BasePage from "../layouts/BasePage";
import HomeRoute from "../pages/HomeRoute";
import { AppProvider } from "../contexts/AppState";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return (
      <AppProvider>
        <BasePage>
          <HomeRoute />
        </BasePage>
      </AppProvider>
    );
  } else {
    return (
      <AppProvider >
        <BasePage>
          <Outlet />
        </BasePage>
      </AppProvider>
    );
  }
}
export default App;
