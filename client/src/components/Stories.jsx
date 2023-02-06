import React, { useRef, useState } from "react";
import StoryLink from "./StoryLink";
import accounts from "../dummyData/accounts.json";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const Stories = () => {
  const storiesRef = useRef();
  const profiles = accounts.users;
  const stories = profiles.map((profile) => {
    return (
      <StoryLink
        key={profile.id}
        img={profile.image}
        username={profile.username}
        visited={true}
      />
    );
  });

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const onScroll = () => {
    storiesRef.current.scrollLeft > 0 ? setShowLeft(true) : setShowLeft(false);

    storiesRef.current.scrollLeft ===
    storiesRef.current.scrollWidth - storiesRef.current.clientWidth
      ? setShowRight(false)
      : setShowRight(true);
  };

  const handleLeft = () => {
    storiesRef.current.scrollLeft -= 252;
  };
  const handleRight = () => {
    storiesRef.current.scrollLeft += 252;
  };

  return (
    <div className="w-full relative">
      <div
        onScroll={onScroll}
        ref={storiesRef}
        className="flex items-center space-x-1 overflow-x-scroll w-full py-7 px-1 scroll-smooth scrollbar-hide relative"
      >
        {stories}
      </div>

      <div className="flex w-full justify-between absolute z-10 px-7 top-1/2 -translate-y-3 h-0">
        <button onClick={handleLeft}>
          <FaChevronCircleLeft
            className={`text-2xl drop-shadow-lg ${!showLeft && "hidden"}`}
          />
        </button>
        <button onClick={handleRight}>
          <FaChevronCircleRight
            className={`text-2xl drop-shadow-lg ${!showRight && "hidden"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Stories;
