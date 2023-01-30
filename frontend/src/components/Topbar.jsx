import React from "react";
import Logo from "./Logo";
import NotifBtn from "./NotifBtn";
import SearchBar from "./SearchBar";

const Topbar = () => {

  const isNotif = true
  return (
    <div className="fixed top-0 right-0 w-full h-16 bg-brandLightBase flex items-center justify-between px-3 md:hidden z-20">
      <Logo/>
      <div className="flex items-center ">
        <SearchBar />
        <NotifBtn isNotif={isNotif}/>
      </div>
    </div>
  );
};

export default Topbar;
