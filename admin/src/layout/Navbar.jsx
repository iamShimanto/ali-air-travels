import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/auth/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userData.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(loginUser(null));
    navigate("/login");
  };

  const linkBase = "px-3 py-2 rounded-md text-sm font-medium";
  const linkActive = "bg-gray-900 text-white";
  const linkInactive = "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-semibold">Admin</div>
            <div className="hidden md:block ml-6">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                >
                  Users
                </NavLink>
                <NavLink
                  to="/packages"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                >
                  Packages
                </NavLink>
                <NavLink
                  to="/bookings"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                >
                  Bookings
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {userInfo && (
              <span className="text-gray-300 text-sm">{userInfo?.email}</span>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden -mr-2">
            <button
              onClick={() => setOpen((p) => !p)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-700">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} block ${isActive ? linkActive : linkInactive}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/users"
              className={({ isActive }) =>
                `${linkBase} block ${isActive ? linkActive : linkInactive}`
              }
            >
              Users
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/packages"
              className={({ isActive }) =>
                `${linkBase} block ${isActive ? linkActive : linkInactive}`
              }
            >
              Packages
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/bookings"
              className={({ isActive }) =>
                `${linkBase} block ${isActive ? linkActive : linkInactive}`
              }
            >
              Bookings
            </NavLink>
            <button
              onClick={() => {
                setOpen(false);
                handleLogout();
              }}
              className={`${linkBase} block w-full text-left bg-red-600 hover:bg-red-700 text-white`}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
