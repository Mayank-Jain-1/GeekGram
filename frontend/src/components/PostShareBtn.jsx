import React from 'react'
import { IoIosShareAlt } from 'react-icons/io'

const PostShareBtn = ({onClick,className}) => {
  return (
    <button className={`${className}`}
    onClick={onClick}>
      <IoIosShareAlt />
    </button>
  )
}

export default PostShareBtn