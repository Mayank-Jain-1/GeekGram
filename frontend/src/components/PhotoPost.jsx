import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import {TbArrowBigTop} from 'react-icons/tb'
import PostLikeBtn from "./PostLikeBtn";

const PhotoPost = ({}) => {
  return (
    <div>
      <section className="header w-full h-16 flex justify-between items-center px-5 text-xs">
        <div className="flex items-center">
          <a href="" className="">
            <img
              src="https://robohash.org/hicveldicta.png"
              alt=""
              className="w-10 h-10 rounded-full bg-black"
            />
          </a>
          <div className="mx-3">
            <p className="text-brand">Name</p>
          </div>
          <div className="flex items-center">
            <BsDot className="text-brandDark" />
            <p className="text-brandDark">21h</p>
          </div>
        </div>
        <button className="relative -right-4 p-3 group">
          <BsThreeDots className="text-xl group-hover:text-brandDark" />
        </button>
      </section>
      <section className="border border-brandGrey h-fit ">
      <img src="https://images.pexels.com/photos/705425/pexels-photo-705425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-full h-full max-h-[550px] object-contain"/>
      </section>

      <section className="flex items-center py-3 px-5 text-xl">
        <PostLikeBtn />
        {/* <ImArrowUp />
        <TbArrowBigTop className="text-2xl"/>
        <ImArrowDown className="mx-3"/> */}
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default PhotoPost;
