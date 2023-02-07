import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import PostAnswer from "./CodePostAnswer";

const CodePostAnswers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const answersCount = 3
  const description = `Pretty simple asnwerall you need to do is this. 
  ${"```js \n const x = 24; \n //here the value x should be 30 and that should be true \nconst that = true\n ```"}
  
  This works because as 
  
  > (x>24 -20 = 4) and that is true
  
  Hope this helps. dont forget to upvote if it does helps..
  `;
  return (
    <section className="p-3 border border-brandGrey">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center space-x-3  p-1"
        >
          <h6 className="text-brandBlue">Answers</h6>
          {isOpen ? (
            <AiFillCaretDown className="text-lg" />
          ) : (
            <AiFillCaretUp className="text-lg" />
          )}
        </button>
        <p className="flex items-center justify-center bg-brandGrey rounded-full h-8 w-8">{answersCount}</p>
      </div>
      <div
        className={`${isOpen ? "max-h-0" : "max-h-screen"} overflow-y-scroll duration-300`}
      >
      <PostAnswer 
      avatar={'https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg'}
      username='Hailer John'
      answer={description}
      upvotes = {20}
      downvotes={5}
      />
      </div>
    </section>
  );
};

export default CodePostAnswers;
