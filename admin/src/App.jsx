import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Users from "./pages/Users";
import Packages from "./pages/Packages";
import Bookings from "./pages/Bookings";
import EditPackage from "./pages/EditPackage";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/admin/packages/:id" element={<EditPackage />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
