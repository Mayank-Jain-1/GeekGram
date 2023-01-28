import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Logo from "./Logo";
import NotifBtn from "./NotifBtn";
import SearchBar from "./SearchBar";

const Navbar = () => {

  const isNotif = true
  return (
    <div className="w-full h-16 bg-brandLightBase flex items-center justify-between px-3 ">
      <Logo />
      <div className="flex items-center ">
        <SearchBar />
        <NotifBtn isNotif={isNotif}/>
      </div>
    </div>
  );
};

export default Navbar;
