import React from 'react'
import Post from '../components/PhotoPost'
import Stories from '../components/Stories'

const Home = () => {
  return (
    <section className='w-full flex justify-center '>
      <div className='pt-16 md:pt-0 flex flex-col max-w-lg w-full h-full'>
        <Stories />
        <Post /> 
        <Post /> 
      </div>
    </section>
  )
}

export default Home