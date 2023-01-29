import React from "react";

const StoryLink = ({ img, username,visited }) => {

  const borderCircleStyle = `${!visited ? 'bg-gradient-to-tr from-brandDark via-brandBlue to-brandAqua' : 'bg-brandGrey '} rounded-full p-0.5`

  return (
    <a href="toChange" className="flex flex-col items-center w-32 ">
      <div className={borderCircleStyle}>
        <div className="bg-brandBase rounded-full p-1">
         <img
          src={img}
          alt=""
          className="rounded-full w-16 h-16 object-contain aspect-square bg-black"
          />
          </div>
      </div>
      <p className="w-24 text-center text-sm">
        {username.length < 9 ? username : username.slice(0, 9) + "..."}
      </p>
    </a>
  );
};

export default StoryLink;
