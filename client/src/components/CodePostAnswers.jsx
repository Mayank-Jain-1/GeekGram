import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import CodePostAddAnswer from "./AddAnswer";
import PostAnswer from "./CodePostAnswer";
// import answers from  '../dummyData/dummyAnswers.json'

const CodePostAnswers = ({answers}) => {
  const [answersArray, setAnswersArray] = useState(answers)
  // console.log(answers);

  const [isOpen, setIsOpen] = useState(false);
  // console.log(typeof answersArray);
  const addAnswer = (answer) => {
    setAnswersArray([...answersArray, answer]);
    console.log('updated');
  }

  

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
        <p className="flex items-center justify-center bg-brandGrey rounded-full h-8 w-8">{answersArray.length}</p>
      </div>
      <div
        className={`${!isOpen ? "max-h-0" : "max-h-[10000px]"} overflow-y-scroll duration-300`}
      >
      {answersArray.map((answer,index) => {
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

      <CodePostAddAnswer addAnswer={addAnswer} />
      </div>
    </section>
  );
};

export default CodePostAnswers;
