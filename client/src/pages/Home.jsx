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
        {posts.map(post => {
          if(post.post === 'photo'){
            return <PhotoPost username={post.username} avatar={post.avatar} photo={post.image_link} time={post.time}/>
          }else if(post.post ==='code') {
            return <CodePost username={post.username} avatar={post.avatar} status={post.status} answers={post.answers}/>
          }
        })}
      </div>
    </section>
  )
}

export default Home