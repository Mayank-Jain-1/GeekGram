import React, { useState } from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";
import AddAnswerViewBar from "./AddAnswerViewBar";
import {} from "react-markdown/lib/react-markdown";

import MyReactMarkdown from "./MyReactMarkdown";
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
        <div className="mt-3 mb-5">
          <AddAnswerViewBar mode={mode} setMode={setMode} />
          {mode === "edit" ? (
            <textarea
              onChange={handleChange}
              value={answer}
              className="p-3 w-full min-h-[300px] bg-brandGrey rounded-lg rounded-tl-none outline-none"
            ></textarea>
          ) : (
            <MyReactMarkdown text={answer} className='w-full p-3 min-h-[300px] border border-white rounded-md'/>
          )}
        </div>

        <button
          onClick={() => {
            addAnswer({
              username: "you",
              answer: answer,
              upvotes: 0,
              downvotes: 0,
              avatar: "",
            });
          }}
          className="text-brandAqua p-2 bg-brandGrey rounded-md"
        >
          {" "}
          Submit Answer
        </button>
      </div>
    </section>
  );
};

export default CodePostAddAnswer;
