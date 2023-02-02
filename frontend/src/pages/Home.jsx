import React from 'react'
import CodePost from '../components/CodePost'
import PhotoPost from '../components/PhotoPost'
import Stories from '../components/Stories'

const Home = () => {
  return (
    <section className='w-full flex justify-center '>
      <div className='pt-16 md:pt-0 flex flex-col max-w-2xl w-full h-full'>
        <Stories />
        <PhotoPost /> 
        <CodePost /> 
      </div>
    </section>
  )
}

export default Home