import React from 'react'
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const CodePostInfoBar = ({avatar,username,languages,status}) => {
  return (
    <section className="header w-full h-16 flex justify-between items-center px-5 text-xs">
    <div className="flex items-center">
      <div className="flex items-center border-r border-brandGrey flex-shrink-0">
        <a href="" className="">
          <img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full bg-black"
          />
        </a>
        <a href="">
          <p className="mx-3">{username}</p>
        </a>
      </div>
      <div className="flex items-center space-x-3 px-2">
        {languages &&
          languages.map((language) => {
            return (
              <p className="p-1.5 bg-brandDark rounded-md">{language}</p>
            );
          })}
        {/* <p>{languages}</p> */}
        <span className="flex items-center">
          <BsDot className="text-brandDark" />
          <p className="text-brandDark">21h</p>
        </span>
        {status === "verified" ? (
          <IoCheckmarkDoneSharp className="text-xl text-brandAqua" />
        ) : status === "answered" ? (
          <FaCheck className="text-xl text-brandAqua " />
        ) : (
          <GoIssueOpened className="text-xl text-yellow-500" />
        )}
      </div>
    </div>

    <button className="relative -right-4 p-3 group">
      <BsThreeDots className="text-xl group-hover:text-brandDark" />
    </button>
  </section>
  )
}

export default CodePostInfoBar