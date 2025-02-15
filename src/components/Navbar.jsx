import { Link } from "react-router-dom";
import logo from "../assets/ecoquest-logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Navbar = () => {

      useEffect(() => {
        AOS.init();
      }, []);
    
    const [menu, setMenu] = useState(true)
    const menuStyle = () => {
        setMenu(!menu)
    }

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
        <div className="space-x-3 hidden md:block">
          <Link to={"/"}>Home</Link>
          <Link>Discover</Link>
          <Link>Update Profile</Link>
          <Link>User Profile</Link>
        </div>
        <div className="flex items-center gap-2 ">
          <FaRegUserCircle className="text-3xl" />
          <Link to={"login"}>Log-in</Link>
        </div>
      </div>
      {menu === false && (
        <div
          className="space-y-2 flex flex-col md:hidden font-semibold text-xl py-5"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <Link to={"/"}>Home</Link>
          <Link>Discover</Link>
          <Link>Update Profile</Link>
          <Link>User Profile</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
