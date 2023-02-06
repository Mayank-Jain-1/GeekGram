import React from 'react'
import { FaRegCommentAlt } from 'react-icons/fa'

const PostCommentBtn = ({onClick,className}) => {
  return (
    <button className={`${className}`}
    onClick={onClick}>
      <FaRegCommentAlt />
    </button>
  )
}

export default PostCommentBtn