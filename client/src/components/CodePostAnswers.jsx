import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import PostAnswer from "./CodePostAnswer";
// import answers from  '../dummyData/dummyAnswers.json'

const CodePostAnswers = (answers) => {
  // console.log(answers)
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
          {!isOpen ? (
            <AiFillCaretDown className="text-lg" />
          ) : (
            <AiFillCaretUp className="text-lg" />
          )}
        </button>
        <p className="flex items-center justify-center bg-brandGrey rounded-full h-8 w-8">{answersCount}</p>
      </div>
      <div
        className={`${!isOpen ? "max-h-0" : "max-h-[10000px]"} overflow-y-scroll duration-300`}
      >
      {answers.answers.map((answer,index) => {
          return <PostAnswer 
          key={index}
          avatar={answer.avatar}
          username={answer.username}
          answer={answer.answer}
          upvotes = {answer.upvotes}
          downvotes={answer.downvotes}
          />
        })
      }

      </div>
    </section>
  );
};

export default CodePostAnswers;
