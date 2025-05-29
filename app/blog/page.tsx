import React from "react";
import PostCard from "../_components/PostCard";
import type { Metadata } from "next";


const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=15";

const getPosts = async () => {
    const posts = await fetch(API_URL);
    if (!posts.ok) throw new Error("Failed to fetch posts");

    const data = await posts.json();
    return data;
};

type Post = {
  id: number;
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: "Blog",
  description: "immersive experiences that deliver",
};

export default async function page() {
  const posts = await getPosts();

  return (
      <div className="w-[90%] flex flex-col gap-4 mx-auto my-16 font-josefin">
        <h1 className="text-2xl ">Welcome to our Blog</h1>

        <div className="flex flex-wrap gap-4 md:gap-8">
          {posts.map((post: Post) => (
            <div key={post.id} className="w-full sm:w-[30%]">
              <PostCard id={post.id} title={post.title} body={post.body} />
            </div>
          ))}
        </div>
      </div>
    
  );
}
