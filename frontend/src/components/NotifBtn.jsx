import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const NotifBtn = ({ isNotif, className }) => {
  return (
    <button
      className={`${className} text-2xl relative
    after:w-2.5 after:h-2.5 after:bg-brandAqua after:absolute after:top-0 after:right-1 after:-translate-y-0.5 after:rounded-full ${
      !isNotif && "after:hidden"
    }
    `}
    >
      <IoIosNotificationsOutline />
    </button>
  );
};

export default NotifBtn;
