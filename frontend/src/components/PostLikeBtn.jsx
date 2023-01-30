import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
const PostLikeBtn = ({flag, onClick,className}) => {
  return (
    <button onClick={onClick}
    className={`${className}`}
    >
      {!flag ? <FaRegHeart />
      : <FaHeart className='text-brandAqua animate-scaleUpDown'/>}
    </button>
  )
}

export default PostLikeBtn