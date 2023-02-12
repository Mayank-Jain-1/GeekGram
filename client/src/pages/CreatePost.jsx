import React, { useEffect, useRef, useState } from "react";
import { MediaPicker, Stack } from "degen";
import "degen/styles";

const CreatePost = () => {
  
  // const mediaPicker = useRef();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMediaUpload = (e) => {
    console.log(e);
  }
  const handleSubmit = async (e) => {
    
  }
  useEffect(() => {
    // console.log(mediaPicker);

  },[])

  return (
    <div className="">
      <form action="">
        <h1 className="text-center my-10">Create Post</h1>
        <label htmlFor="" className="block text-xl my-3">Add Image to be posted.</label>
        <MediaPicker 
        className="" 
        onChange={ (e) => handleMediaUpload(e)}
        maxSize={100}
        required
        
        label="Choose or drag and drop and image" />
        <label htmlFor="">Description/Caption</label>
        <input
          onChange={handleChange}
          type="text"
          value={title}
          className="bg-brandBase w-full m-4"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
