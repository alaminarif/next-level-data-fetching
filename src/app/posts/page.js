import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();
  console.log(posts);
  return (
    <div className="w-full">
      <h1 className="">total Post: {posts.length} </h1>
      {posts.map((post) => (
        <div key={post.id} className="card bg-primary text-primary-content mx-auto m-5 w-[50%]">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>Description: {post.description}</p>
            <p>Like Count: {post.line_count}</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
