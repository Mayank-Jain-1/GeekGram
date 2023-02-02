import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CodePost = ({ languages = "HTML", status, problemStatement }) => {
  problemStatement = "issue with some react component.";
  status = "";

  return (
    <div className="border-y border-brandGrey mb-10">
      <section className="header w-full h-16 flex justify-between items-center px-5 text-xs">
        <div className="flex items-center">
          <div className="flex items-center border-r border-brandGrey flex-shrink-0">
            <a href="" className="">
              <img
                src="https://robohash.org/hicveldicta.png"
                alt=""
                className="w-10 h-10 rounded-full bg-black"
              />
            </a>
            <a href="">
              <p className="mx-3">Name</p>
            </a>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <p>{languages}</p>
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CodePost;
