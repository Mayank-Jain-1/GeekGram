import React from "react";
import CodePost from "../components/CodePost";
import PhotoPost from "../components/PhotoPost";
import Stories from "../components/Stories";
import posts from "../dummyData/posts.json";

const Home = () => {
  return (
    <section>
      <div>
        <Stories />
        {posts.map((post, index) => {
          if (post.post === "photo") {
            return <PhotoPost key={index} data={post} />;
          } else {
            return <CodePost key={index} data={post} />;
          }
        })}
      </div>
    </section>
  );
};

export default Home;
