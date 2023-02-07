import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const PostAnswer = ({ avatar, username, answer, upvotes, downvotes }) => {
  return (
    <div className="p-5">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <p>{username}</p>
      </div>
      <div className="flex">
        <div className="text-2xl px-2 pt-5 flex  flex-col items-center">
          <button>      
            <AiFillCaretUp />
          </button>
          <p className="text-lg">{upvotes - downvotes || 0}</p>
          <button>
            <AiFillCaretDown />
          </button>
        </div>
        <ReactMarkdown
          children={answer}
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
      </div>
    </div>
  );
};

export default PostAnswer;
