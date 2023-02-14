import React, { useEffect, useRef, useState } from "react";
import { MediaPicker, Stack } from "degen";
import "degen/styles";
import { FiHash, FiImage } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import GreenButton from "../components/GreenButton";
import RedButton from "../components/RedButton";
import CreatePostInput from "../components/CreatePostInput";

const CreatePost = () => {
  const [postState, setPostState] = useState({
    caption: "",
    file: null,
    tagsString: "",
    tagsArray: [],
    peopleString: "",
    peopleArray: [],
  });
  const [fileState, setFileState] = useState({
    error: false,
  });
  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const handleMediaUpload = (e) => {
    setPostState({ ...postState, file: e });
  };
  const handleSubmit = async (e) => {};
  const handleReset = async (e) => {
    e.preventDefault();
    setFileState({...fileState, error:"Image is Required" });
  };

  return (
    <div className="px-4 mb-10">
      <form action="">
        <h1 className="text-center my-10">Create Post</h1>
        <label htmlFor="" className="flex items-center space-x-5  my-5">
          <FiImage className="text-3xl" />
          <p className="text-xl">Add Image to be posted.</p>
        </label>
        <MediaPicker
          onChange={(e) => handleMediaUpload(e)}
          maxSize={100}
          error={fileState.error}
          // errorMessage={fileState.errorMessage}
          required
          label="Choose or drag and drop and image"
        />
        <label htmlFor="" className="flex items-center space-x-5 mb-3 mt-8">
          <MdOutlineDescription className="text-3xl" />
          <p className="text-xl">Description/Caption</p>
        </label>

        <CreatePostInput
          className="px-4"
          onChange={handleChange}
          name="caption"
          placeholder="Description..."
          value={postState.caption}
        />
        {/* Tags and People */}
        <div className="flex">
          <div className="w-full">
            <label htmlFor="" className="flex items-center space-x-5 mb-3 mt-8">
              <FiHash className="text-3xl" />
              <p className="text-xl">Tags</p>
            </label>

            <CreatePostInput
              className="px-4"
              onChange={handleChange}
              name="tagsString"
              placeholder="#Advitya2023 #2Genders"
              value={postState.tagsString}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="flex items-center space-x-5 mb-3 mt-8 px-1"
            >
              <BsPersonPlus className="text-3xl" />
              <p className="text-xl">People</p>
            </label>

            <CreatePostInput
              className="px-4"
              onChange={handleChange}
              type="text"
              name="peopleString"
              placeholder="@andrew_tate @elonmusk"
              value={postState.peopleString}
            />
          </div>
        </div>

        <GreenButton
          onClick={handleSubmit}
          text="Submit"
          className="mx-4 my-10 px-5"
        />
        <RedButton
          onClick={handleReset}
          text="Reset"
          className="mx-4 my-10 px-5 float-right"
        />
      </form>
    </div>
  );
};

export default CreatePost;
