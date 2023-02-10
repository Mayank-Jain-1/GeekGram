import React, { useState } from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";
import AddAnswerViewBar from "./AddAnswerViewBar";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodePostAddAnswer = ({addAnswer}) => {
  const [answer, setAnswer] = useState("");
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const [mode, setMode] = useState("edit");

  return (
    <section className="p-2">
      <button className="text-lg text-brandAqua  p-2 flex items-center space-x-3">
        <RiQuestionAnswerLine />
        <p>Add Answer</p>
      </button>

      <div className="mt-3 mb-5">
        <AddAnswerViewBar mode={mode} setMode={setMode} />
        {mode === "edit" ? (
          <textarea
            onChange={handleChange}
            value={answer}
            className="p-3 w-full min-h-[300px] bg-brandGrey rounded-lg rounded-tl-none outline-none"
          ></textarea>
        ) : (
          <ReactMarkdown
            children={answer.replaceAll("\n\n\n", "\n\n&zwnj;\n\n")}
            remarkPlugins={[remarkGfm]}
            className="w-full p-3 min-h-[300px] border border-white rounded-md"
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children)
                      .replace(/\n$/, "")
                      .replaceAll("&zwnj;", "")}
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
    </section>
  );
};

export default CodePostAddAnswer;
