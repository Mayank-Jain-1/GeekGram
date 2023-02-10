import React, { useState } from "react";
import PhotoPostInfoBar from "./PhotoPostInfoBar";
import PostCommentBtn from "./PostCommentBtn";
import PostLikeBtn from "./PostLikeBtn";
import PostShareBtn from "./PostShareBtn";

const PhotoPost = ({ data }) => {
  const { username, avatar, photo, time } = data;
  const [isLiked, setIsLiked] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <div className="border-y border-brandGrey mb-10">
      <PhotoPostInfoBar avatar={avatar} username={username} time={time} />

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
      </section>

      <section className="px-4">
        <p className="font-medium">Number Likes</p>
        <p className="font-medium">
          {" "}
          {username}{" "}
          <span className="font-light">Here will be the caption</span>{" "}
        </p>
        <button className="my-3 text-sm text-brandDark">
          View all number comments...
        </button>
      </section>
    </div>
  );
};

export default PhotoPost;
