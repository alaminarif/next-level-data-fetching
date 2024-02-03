import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id + "",
    };
  });
  return ids;
}
const PostDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);
  return (
    <div>
      {" "}
      <div key={post.id} className="card bg-primary text-primary-content mx-auto m-5 w-[50%]">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>Description: {post.description}</p>
          <p>Like Count: {post.line_count}</p>
          <div className="card-actions justify-end">
            <Link href="/posts">
              <button className="btn">Buy </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
