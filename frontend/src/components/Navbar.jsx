import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-brandDark flex items-center justify-between px-4">
      <h3>GeekGram</h3>
      <div className="flex items-center ">
        <SearchBar />
        <IoIosNotificationsOutline />
      </div>
    </div>
  );
};

export default Navbar;
