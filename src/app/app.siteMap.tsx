import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FirstRoute from "../pages/FirstRoute";
import ChildRoute from "../pages/ChildRoute";
import SplitCalculatorRoute from "../pages/SplitCalculatorRoute";
import ErrorRoute from "../pages/ErrorRoute";
import PaymentRoute from "../pages/PaymentRoute";
import {
  CalculateOutlined,
  ChildCare,
  FlightClass,
  Home,
  PaymentsOutlined,
} from "@mui/icons-material";

export type SiteMapType = PathType[];

interface PathType {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export const siteMap: SiteMapType = [
  { path: "/", title: "Home", icon: <Home /> },
  { path: "/child", title: "Child", icon: <ChildCare /> },
  { path: "/firstRoute", title: "First Route", icon: <FlightClass /> },
  {
    path: "/split-calculator",
    title: "Payment Split Calculator",
    icon: <CalculateOutlined />,
  },
  {
    path: "/payment",
    title: "Payment",
    icon: <PaymentsOutlined />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "child",
        element: <ChildRoute />,
        // errorElement: <ErrorRoute />,
      },
      {
        path: "/firstRoute",
        element: <FirstRoute />,
        // errorElement: <ErrorRoute />,
      },
      {
        path: "/split-calculator",
        element: <SplitCalculatorRoute />,
        // errorElement: <ErrorRoute />,
      },
      {
        path: "/payment",
        element: <PaymentRoute />,
        // errorElement: <ErrorRoute />,
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
