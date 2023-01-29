import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

const SearchBar = () => {

  const [focus, setFocus] = useState(false)
  return (
    <div className="flex w-44 sm:w-64 items-center mx-2 py-2 px-3 bg-brandGrey rounded-lg ">
      <CgSearch className={`${focus && 'hidden'} mr-3 peer-focus:hidden text-xl`} />
      <input
        onFocus={() => setFocus(true)}
        onBlur = {() => setFocus(false)}
        type="text"
        placeholder="Search..."
        className=" peer bg-transparent placeholder:text-white focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
