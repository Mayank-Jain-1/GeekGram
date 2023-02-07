import React, { useState } from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodePostAnswers from "./CodePostAnswers";

const CodePost = ({
  username, 
  avatar,
  languages,
  status,
  title,
  description,
  answers
}) => {
  title =
    "Issue with some react component. Cannot open it using this onClick Function";
  // status = "verified";
  description = `this is the description Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, maxime!
  ${"```js \n const x = 24; \nconst that = false\n ```"}
  
  Also Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia porro, iste voluptas explicabo sed nisi illo ex. Deleniti accusamus vel recusandae delectus dolorum ducimus pariatur iure neque, voluptas quibusdam.
  
  >This is the problem
  `;


  return (
    <div className="border-y border-brandGrey mb-10">
      <section className="header w-full h-16 flex justify-between items-center px-5 text-xs">
        <div className="flex items-center">
          <div className="flex items-center border-r border-brandGrey flex-shrink-0">
            <a href="" className="">
              <img
                src={avatar}
                alt=""
                className="w-10 h-10 rounded-full bg-black"
              />
            </a>
            <a href="">
              <p className="mx-3">{username}</p>
            </a>
          </div>
          <div className="flex items-center space-x-3 px-2">
            {languages && languages.map((language) => (
              <p className="p-1 bg-brandDark rounded-md">{language}</p>
            ))}
            {/* <p>{languages}</p> */}
            <span className="flex items-center">
              <BsDot className="text-brandDark" />
              <p className="text-brandDark">21h</p>
            </span>
            {status === "verified" ? (
              <IoCheckmarkDoneSharp className="text-xl text-brandAqua" />
            ) : status === "answered" ? (
              <FaCheck className="text-xl text-brandAqua " />
            ) : (
              <GoIssueOpened className="text-xl text-yellow-500" />
            )}
          </div>
        </div>

        <button className="relative -right-4 p-3 group">
          <BsThreeDots className="text-xl group-hover:text-brandDark" />
        </button>
      </section>

      <section className="problem p-3 border border-brandGrey">
        <h4 className="mb-3">{title}</h4>
        <ReactMarkdown          children={description}
          remarkPlugins={[remarkGfm]}
          className="w-full p-3"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </section>
      <CodePostAnswers answers={answers}/>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CodePost;

{
  /* <div className="w-full h-8 bg-brandGrey flex items-center">
              <button className="h-full px-3 flex items-center space-x-2">
                <AiOutlineEdit /> 
                <p>Edit</p>
              </button>
              <button>Preview</button>
              <button></button>
          </div> */
}
