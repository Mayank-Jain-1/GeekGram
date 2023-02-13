import React from "react";

const RedButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-brandGrey text-red-600 p-2 rounded-md border border-red-600`}
    >
      {text}
    </button>
  );
};

export default RedButton;
