import React, { useState } from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { TbArrowBigTop } from "react-icons/tb";
import PostCommentBtn from "./PostCommentBtn";
import PostLikeBtn from "./PostLikeBtn";
import PostShareBtn from "./PostShareBtn";

const PhotoPost = ({data}) => {
  const {username, avatar, photo, time} = data
  const [isLiked, setIsLiked] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  return (
    <div className="border-y border-brandGrey mb-10">
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


      <div>
        <section className="border border-brandGrey h-fit ">
          <img
          onDoubleClick={() => setIsLiked(!isLiked)}
            src={photo}
            alt=""
            className="w-full h-full max-h-[550px] object-contain"
          />
        </section>

        <section className="flex items-center py-3 px-4 text-xl justify-between">
          <div className="flex items-center">
            <PostLikeBtn
              className="text-2xl"
              flag={isLiked}
              onClick={() => setIsLiked(!isLiked)}
            />
            {/* Pending Onclick Funtion */}
            <PostCommentBtn className="px-6" />
          </div>
          {/* Pending ON share function */}
          <PostShareBtn className="text-2xl" />

          {/* <ImArrowUp />
        <TbArrowBigTop className="text-2xl"/>
      <ImArrowDown className="mx-3"/> */}
        </section>

        <section className="px-4">
          <p className="font-medium">Number Likes</p>
          <p className="font-medium">
            {" "}
            {username} <span className="font-light">
              Here will be the caption
            </span>{" "}
          </p>
          <button className="my-3 text-sm text-brandDark">
            View all number comments...
          </button>
        </section>

      </div>
    </div>
  );
};

export default PhotoPost;
