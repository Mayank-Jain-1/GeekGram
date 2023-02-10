import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai"


const AddAnswerViewBar = ({mode,setMode}) => { 


  return (
    <div className="w-full h-10 flex items-center">
      <button onClick={() => setMode('edit')} className={`h-full px-3 flex items-center space-x-2 ${mode === 'edit' && 'bg-brandGrey rounded-t-lg translate-y-1'}`}>
        <AiOutlineEdit />
        <p>Edit</p>
      </button>
      <button onClick={() => setMode('preview')} className={`bg-brandBase h-full px-3 flex items-center space-x-2 ${mode === 'preview' && 'border border-white border-b-0 border-b-brandBase rounded-t-lg translate-y-1'}`}>
        <AiOutlineEye />
        <p>Preview</p>
      </button>
    </div>
  );
};

export default AddAnswerViewBar;
