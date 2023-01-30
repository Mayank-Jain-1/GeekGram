import React from "react";

const SidebarButton = ({ name, logo, className }) => {
  return (
    <button
      className={`${className} flex items-center justify-center p-2 text-base lg:hover:bg-brandGrey hover:scale-110
      lg:hover:scale-100
      rounded-full md:my-2 md:p-4 lg:w-full md:justify-center lg:justify-start`}
    >
      <div className="text-base md:text-2xl">{logo}</div>
      <p className="hidden lg:block text-base mx-5">{name}</p>
    </button>
  );
};

export default SidebarButton;
