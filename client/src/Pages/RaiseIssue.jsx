import React, { useState } from "react";
import { BsCodeSlash, BsPersonPlus } from "react-icons/bs";
import { MdOutlineTitle } from "react-icons/md";
import { ImQuestion } from "react-icons/im";
import CreatePostInput from "../components/CreatePostInput";
import GreenButton from "../components/GreenButton";
import RedButton from "../components/RedButton";
import TextToMarkdown from "../components/TextToMarkdown";

const RaiseIssue = () => {
  const [issueState, setIssueState] = useState({
    title: "",
    question: "",
    languages: "",
  });

  const handleChange = (e) => {
    setIssueState({ ...issueState, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 mb-10">
        <h1 className="text-center my-10 font-mono">Raise an Issue</h1>

        <label
          htmlFor=""
          className="flex items-center space-x-5 mb-3 mt-8 px-1"
        >
          <MdOutlineTitle className="text-3xl" />
          <p className="text-xl">Title</p>
        </label>

        <CreatePostInput
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Unable to add jumping animation on Dani's ..."
          value={issueState.title}
        />
        <label
          htmlFor=""
          className="flex items-center space-x-5 mb-3 mt-8 px-1"
        >
          <BsCodeSlash className="text-3xl" />
          <p className="text-xl">Languages</p>
        </label>

        <CreatePostInput
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="HTML, Java, Python,..."
          value={issueState.title}
        />

        <label
          htmlFor=""
          className="flex items-center space-x-5 mb-3 mt-8 px-1"
        >
          <ImQuestion className="text-3xl" />
          <p className="text-xl">Question</p>
        </label>

        <TextToMarkdown className='my-8' onChange={(e) => {
          setIssueState({...issueState, question: e.target.value });
        }} text={issueState.question}/>
        <GreenButton
          // onClick={}
          text="Submit"
          className="mx-4 px-5"
        />
        <RedButton
          // onClick={}
          text="Reset"
          className="mx-4 px-5 float-right"
        />
    </div>
  );
};

export default RaiseIssue;
