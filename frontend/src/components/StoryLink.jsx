import React from 'react'

const StoryLink = ({img,username}) => {

  return (
    <a href='toChange' className='flex flex-col items-center w-32 '>
      <img src={img} alt="" 
      className='rounded-full w-14 h-14 object-contain aspect-square border '/>
      <p className='w-16 text-center text-sm'>{
        username.length < 9
          ? username
          : username.slice(0,9) + "..."
      }</p>
    </a>
  )
}

export default StoryLink