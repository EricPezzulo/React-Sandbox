import { useContext } from "react";
import { AppContext } from "../contexts/AppState";

const HomeRoute = () => {
  const { firstName, routePath } = useContext(AppContext)
  console.log(firstName, routePath)
  return <div className="p-5">
    <div>
      <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg" alt="Gojo" />
    </div>

  </div>;
};

export default HomeRoute;
