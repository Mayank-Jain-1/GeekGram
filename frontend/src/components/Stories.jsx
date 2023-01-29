import React from 'react'
import M from '../Media/M2.png'
import StoryLink from './StoryLink'
import accounts from '../dummyData/accounts.json'
const Stories = () => {

  const profiles = accounts.users
  const stories = profiles.map((profile) => {
    // console.log(img, i);
    return <StoryLink key={profile.id} img={profile.image} username={profile.username}/>;
  }
  )
  return (
    <div className='flex space-x-6 overflow-x-scroll w-full py-7 px-5 scroll-smooth scrollbar-hide '>
      {stories}
    </div>
  )
}

export default Stories