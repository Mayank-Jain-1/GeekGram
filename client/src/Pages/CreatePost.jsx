import React, { useEffect, useRef, useState } from "react";
import { MediaPicker, Stack } from "degen";
import "degen/styles";
import { FiHash, FiImage } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import GreenButton from "../components/GreenButton";
import RedButton from "../components/RedButton";
import CreatePostInput from "../components/CreatePostInput";
import Axios from 'axios'

const CreatePost = () => {
  const [postState, setPostState] = useState({
    description: "",
    file: null,
    tags: "",
    people: "",
    mediaPickerKey:0
  });
  const [fileState, setFileState] = useState({
    error: false,
  });
  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const UploadToCloudinary = async (file) => {
    // const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    // const upload_preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    const cloudName = 'dtmku7uhc';
    const upload_preset = 'h1hu6ddg'
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);

    const response = await Axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData)
    console.log('response: ', response.data.secure_url);
  }
  const resetMediaPicker = () => {
    setPostState({...postState, mediaPickerKey: postState.mediaPickerKey + 1 });
  }
  const handleMediaUpload = (e) => {
    setPostState({ ...postState, file: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tagArray = postState.tags.split(/\s+/).map((tag) => tag.trim().replace(/[#@]+/,'')).filter(tag => tag.length > 0);
    let peopleArray = postState.people.split(/\s+/).map((person) => person.trim().replace(/[#@]+/,'')).filter(person => person.length > 0);
    UploadToCloudinary(postState.file);

  };

  const handleReset = async (e) => {
    e.preventDefault();
    setPostState({
      description: "",
      file: null,
      tags: "",
      people: "",
      mediaPickerKey: postState.mediaPickerKey + 1
    });
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
          key={postState.mediaPickerKey}
          onChange={(e) => handleMediaUpload(e)}
          maxSize={1}
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
          name="description"
          placeholder="Description..."
          value={postState.description}
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
              name="tags"
              placeholder="#Advitya2023 #2Genders"
              value={postState.tags}
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
              name="people"
              placeholder="@andrew_tate @elonmusk"
              value={postState.people}
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
