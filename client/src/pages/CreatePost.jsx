import React, { useEffect, useRef, useState } from "react";
import { MediaPicker, Stack } from "degen";
import "degen/styles";
import { FiImage } from "react-icons/fi";
import { MdOutlineDescription } from "react-icons/md";

const CreatePost = () => {
  // const mediaPicker = useRef();
  const [postState, setPostState] = useState({
    caption: "",
    file: null,
  });
  const [fileState, setFileState] = useState({
    error: false,
    errorMessage: "Please upload an image",
    uploading: false,
    uploaded: true,
  });
  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const handleMediaUpload = (e) => {
    console.log(e);
  };
  const handleSubmit = async (e) => {};
  useEffect(() => {
    // console.log(mediaPicker);
  }, []);

  return (
    <div className="">
      <form action="">
        <h1 className="text-center my-10">Create Post</h1>
        <label htmlFor="" className="flex items-center space-x-5  my-5">
          <FiImage className="text-3xl" />
          <p className="text-xl">Add Image to be posted.</p>
        </label>
        <MediaPicker
          onChange={(e) => handleMediaUpload(e)}
          maxSize={1}
          required
          label="Choose or drag and drop and image"
        />
        <label htmlFor="" className="flex items-center space-x-5 mb-3 mt-8">
          <MdOutlineDescription className="text-3xl"/>
          <p className="text-xl">Description/Caption</p>
        </label>

        <div className="px-4">
        <input
          onChange={handleChange}
          type="text"
          name="caption"
          placeholder="Description..."
          value={postState.caption}
          className="bg-brandBase w-full border-b p-3 outline-none"
          />
          </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
