import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ecoquest-logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Context } from "../provider/ContextProvider";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [menu, setMenu] = useState(true);
  const menuStyle = () => {
    setMenu(!menu);
  };

  const { user, userLogOut } = useContext(Context);

  // *Indicate Active Route In The Navbar
  const navLinkActiveStatus = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive && "4px solid green",
    };
  };

  return (
    <div className="max-w-screen-2xl p-4 mx-auto font-semibold">
      <div className="flex justify-between items-center">
        <div className="md:hidden text-2xl">
          {menu === true ? (
            <RiMenu2Line onClick={menuStyle} />
          ) : (
            <IoMdClose onClick={menuStyle} />
          )}
        </div>
        <div className="w-40">
          <Link to={"/"}>
            <img src={logo} alt="EcoQuest Since 2024" />
          </Link>
        </div>
        <div className="space-x-5 hidden md:block">
          <NavLink
            style={navLinkActiveStatus}
            className="hover:text-gray-500 transition-all duration-200"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={navLinkActiveStatus}
            className="hover:text-gray-500 transition-all duration-200"
            to={"auth/updateProfile"}
          >
            Update Profile
          </NavLink>
          <NavLink
            style={navLinkActiveStatus}
            className="hover:text-gray-500 transition-all duration-200"
            to={"auth/userProfile"}
          >
            User Profile
          </NavLink>
        </div>
        <div className="flex items-center gap-2 ">
          {user ? (
            user.photoURL && (
              <div className="group relative inline-block">
                <img
                  className={`w-[2rem] h-[2rem] object-cover rounded-full`}
                  src={user.photoURL}
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap z-10">
                  {user.displayName}
                </div>
              </div>
            )
          ) : (
            <FaRegUserCircle className="text-3xl" />
          )}
          {user ? (
            <Link
              onClick={userLogOut}
              className="border border-green-800 px-3 py-1 rounded-lg bg-green-800 hover:bg-white hover:text-black text-white text-bold transition-all duration-200"
            >
              Log-Out
            </Link>
          ) : (
            <Link
              className="border border-green-800 px-3 py-1 rounded-lg bg-green-800 hover:bg-white hover:text-black text-white text-bold transition-all duration-200"
              to={"auth/login"}
            >
              Log-In
            </Link>
          )}
        </div>
      </div>
      {menu === false && (
        <div
          className="space-y-2 flex flex-col md:hidden font-semibold text-xl py-5"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <NavLink
            style={navLinkActiveStatus}
            className="hover:text-gray-500 transition-all duration-200"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={navLinkActiveStatus}
            className="hover:text-gray-500 transition-all duration-200"
            to={"auth/updateProfile"}
          >
            Update Profile
          </NavLink>
          <NavLink
            style={navLinkActiveStatus}
            className="hover:text-gray-500 transition-all duration-200"
            to={"auth/userProfile"}
          >
            User Profile
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
