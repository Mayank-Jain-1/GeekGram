import React from 'react'
import CodePost from '../components/CodePost'
import PhotoPost from '../components/PhotoPost'
import Stories from '../components/Stories'
import posts from '../dummyData/posts.json'

const Home = () => {
  return (
    <section className='w-full flex justify-center '>
      <div className='pt-16 md:pt-0 flex flex-col max-w-2xl w-full h-full'>
        <Stories />
        {/* <PhotoPost />  */}
        {posts.map((post,index) => {
          if(post.post === 'photo'){
            return <PhotoPost key={index} data={post}/>
          }else  {
            return <CodePost key={index} data={post}/>
          }
        })}
      </div>
    </section>
  )
}

export default Home

