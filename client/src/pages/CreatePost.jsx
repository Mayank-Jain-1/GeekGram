import React, { useEffect, useRef, useState } from "react";
import { MediaPicker, Stack } from "degen";
import "degen/styles";
import { FiHash, FiImage } from "react-icons/fi";
import { MdOutlineDescription } from "react-icons/md";
import GreenButton from "../components/GreenButton";
import RedButton from "../components/RedButton";

const CreatePost = () => {
  const [postState, setPostState] = useState({
    caption: "",
    file: null,
    tagsString: "",
    tagsArray: [],
  });
  const [fileState, setFileState] = useState({
    error: false,
    errorMessage: "Please upload an image",
  });
  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const handleMediaUpload = (e) => {
    setPostState({ ...postState, file: e });
  };
  const handleSubmit = async (e) => {};

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
          maxSize={100}
          required
          label="Choose or drag and drop and image"
        />
        <label htmlFor="" className="flex items-center space-x-5 mb-3 mt-8">
          <MdOutlineDescription className="text-3xl" />
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

        <div className="flex">
          <div className="w-full">
            <label htmlFor="" className="flex items-center space-x-5 mb-3 mt-8">
              <FiHash className="text-3xl" />
              <p className="text-xl">Tags and People</p>
            </label>

            <div className="px-4">
              <input
                onChange={handleChange}
                type="text"
                name="tagsString"
                placeholder="#Advitya2023 @andrew_tate"
                value={postState.tagsString}
                className="bg-brandBase w-full border-b p-3 outline-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="" className="flex items-center space-x-5 mb-3 mt-8">
              <FiHash className="text-3xl" />
              <p className="text-xl">Tags and People</p>
            </label>

            <div className="px-4">
              <input
                onChange={handleChange}
                type="text"
                name="tagsString"
                placeholder="#Advitya2023 @andrew_tate"
                value={postState.tagsString}
                className="bg-brandBase w-full border-b p-3 outline-none"
              />
            </div>
          </div>
        </div>
        <GreenButton
          onClick={handleSubmit}
          text="Submit"
          className="mx-4 my-10 px-5"
        />
        <RedButton
          onClick={handleSubmit}
          text="Submit"
          className="mx-4 my-10 px-5 float-right"
        />
      </form>
    </div>
  );
};

export default CreatePost;
