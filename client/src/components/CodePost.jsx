import React, { useState } from "react";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodePostAnswers from "./CodePostAnswers";
import CodePostInfoBar from "./CodePostInfoBar";
import MyReactMarkdown from "./MyReactMarkdown";

const CodePost = ({ data }) => {
  let { username, avatar, languages, question, status, title, answers } = data;
  title =
    "Issue with some react component. Cannot open it using this onClick Function";
  return (
    <div className="border-y border-brandGrey mb-10">
      <CodePostInfoBar avatar={avatar} username={username} languages={languages} status={status}/>

      <section className="problem p-3 border border-brandGrey">
        <h4 className="mb-3">{title}</h4>
        <MyReactMarkdown text={question} className='w-full p-3'/>
      </section>
      <CodePostAnswers answers={answers} />
    </div>
  );
};

export default CodePost;
