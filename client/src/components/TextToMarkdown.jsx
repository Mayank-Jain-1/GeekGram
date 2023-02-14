import React, { useState } from "react";
import AddAnswerViewBar from "./AddAnswerViewBar";
import MyReactMarkdown from "./MyReactMarkdown";

const TextToMarkdown = ({className,onChange,text}) => {

  const [mode, setMode] = useState('edit');
  
  return (
    <div className={className}>
      <AddAnswerViewBar mode={mode} setMode={setMode} />
      {mode === "edit" ? (
        <textarea
          onChange={onChange}
          value={text}
          className=" block p-3 w-full min-h-[300px] bg-brandGrey rounded-lg rounded-tl-none outline-none"
        ></textarea>
      ) : (
        <MyReactMarkdown
          text={text}
          className="w-full p-3 min-h-[300px] border border-white rounded-md"
        />
      )}
    </div>
  );
};

export default TextToMarkdown;
