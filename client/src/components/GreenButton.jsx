import React from "react";

const GreenButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-brandAqua p-2 bg-brandGrey rounded-md border border-brandAqua`}
    >
      {text}
    </button>
  );
};

export default GreenButton;
