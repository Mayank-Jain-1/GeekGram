import React from 'react'
import Stories from '../components/Stories'

const Home = () => {
  return (
    <section className='w-full flex justify-center '>
      <div className='pt-16 md:pt-0 flex flex-col max-w-lg w-full h-full'>
        <Stories />
      </div>

      
    </section>
  )
}

export default Home