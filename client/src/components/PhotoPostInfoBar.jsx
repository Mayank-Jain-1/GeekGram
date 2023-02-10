import React from 'react'
import { BsDot, BsThreeDots } from "react-icons/bs";


const PhotoPostInfoBar = ({avatar,username,time}) => {
  return (
    <section className="header w-full h-16 flex justify-between items-center px-5 text-xs">
    <div className="flex items-center">
      <a href="" className="">
        <img
          src={avatar}
          alt=""
          className="w-10 h-10 rounded-full bg-black"
        />
      </a>
      <div className="mx-3">
        <p className="text-brand">{username}</p>
      </div>
      <div className="flex items-center">
        <BsDot className="text-brandDark" />
        <p className="text-brandDark">{time}</p>
      </div>
    </div>
    <button className="relative -right-4 p-3 group">
      <BsThreeDots className="text-xl group-hover:text-brandDark" />
    </button>
  </section>

  )
}

export default PhotoPostInfoBar