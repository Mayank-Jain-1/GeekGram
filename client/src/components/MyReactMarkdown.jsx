import React from 'react'
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";


const MyReactMarkdown = ({text,className}) => {
  text = text || "";
  return (
    <ReactMarkdown
    children={text.replaceAll("\n\n\n", "\n\n&zwnj;\n\n")}
    remarkPlugins={[remarkGfm]}
    className={className}
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
  )
}

export default MyReactMarkdown