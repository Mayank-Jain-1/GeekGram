import React, { useState } from "react";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodePostAnswers from "./CodePostAnswers";
import CodePostInfoBar from "./CodePostInfoBar";

const CodePost = ({ data }) => {
  let { username, avatar, languages, question, status, title, answers } = data;
  title =
    "Issue with some react component. Cannot open it using this onClick Function";

  return (
    <div className="border-y border-brandGrey mb-10">
      <CodePostInfoBar avatar={avatar} username={username} languages={languages} status={status}/>

      <section className="problem p-3 border border-brandGrey">
        <h4 className="mb-3">{title}</h4>
        <ReactMarkdown
          children={question}
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
                <code className={"whitespace-normal"} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </section>
      <CodePostAnswers answers={answers} />
    </div>
  );
};

export default CodePost;
