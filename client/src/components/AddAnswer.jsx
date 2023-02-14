import React, { useState } from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";
import AddAnswerViewBar from "./AddAnswerViewBar";
import {} from "react-markdown/lib/react-markdown";

import MyReactMarkdown from "./MyReactMarkdown";
import GreenButton from "./GreenButton";
import RedButton from "./RedButton";
import TextToMarkdown from "./TextToMarkdown";
const CodePostAddAnswer = ({ addAnswer }) => {
  const [answer, setAnswer] = useState("");
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  const [isOpen, setisOpen] = useState(false);
  const [mode, setMode] = useState("edit");

  return (
    <section className="p-2">
      <button
        onClick={() => {
          setisOpen(true);
        }}
        className="text-lg text-brandAqua  p-2 flex items-center space-x-3"
      >
        <RiQuestionAnswerLine />
        <p>Add Answer</p>
      </button>

      <div className={`${isOpen ? "block" : "hidden"}`}>
        <TextToMarkdown className='mt-3 mb-5' text={answer} onChange={handleChange}/>
        <GreenButton
          text="Submit Answer"
          onClick={() => {
            setisOpen(false);
            setMode("edit");
            setAnswer("");
            addAnswer({
              username: "you",
              answer: answer,
              upvotes: 0,
              downvotes: 0,
              avatar: "",
            });
          }}
        />

        <RedButton
          text="Delete"
          onClick={() => {
            setisOpen(false);
            setMode("edit");
            setAnswer("");
          }}
          className='float-right px-6'
        />

      </div>
    </section>
  );
};

export default CodePostAddAnswer;
