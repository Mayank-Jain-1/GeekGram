import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
const PostLikeBtn = ({flag, onClick}) => {
  const [iflag, setIflag] = useState(false)
  return (
    <button onClick={() => setIflag(!iflag)}
    className='text-2xl'
    >
      {!iflag ? <FaRegHeart />
      : <FaHeart className='text-brandAqua animate-scaleUpDown'/>}
    </button>
  )
}

export default PostLikeBtn