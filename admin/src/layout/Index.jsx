import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const userInfo = useSelector((state) => state.userData.user);

  const savedTime = localStorage.getItem("tokenTime");
  if (savedTime && Date.now() - savedTime > 24 * 60 * 60 * 1000) {
    localStorage.clear();
  }

  if (!userInfo) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
