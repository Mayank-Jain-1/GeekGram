import React from "react";
import { TbLetterG } from "react-icons/tb";

const Logo = ({className}) => {
  return (
    <a className={className} href="toChange">

      <h3 className="font-dancing text-3xl ml-1 md:hidden lg:block lg:text-4xl">GeekGram</h3>
      <TbLetterG className="hidden md:block lg:hidden"/>
    </a>
  );
};

export default Logo;
