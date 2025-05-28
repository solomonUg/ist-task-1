import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

const getSinglePost = async (slug: string) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  if (!post.ok) throw new Error("Failed to fetch post");

  const data = await post.json();
  return data;
};

const getUser = async (userId: number) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!user.ok) throw new Error("Failed to fetch user");

  const data = await user.json();
  return data;
}

export const metadata: Metadata = {
  title: "Post Details",   
  description: "immersive experiences that deliver",
};

export default async function page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await getSinglePost(slug);
    const { userId } = post;
    const user = await getUser(userId);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[90%] h-full flex flex-col sm:flex-row  gap-4 my-16 mx-auto">
        <div className="relative sm:w-[40%] h-[400px]">
          <Image
            src="/image-grid.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
            <h1>Post {params.slug}</h1>
            <h2 className="text-3xl font-bold text-black/90">{post.title}</h2>
            <p className="text-sm text-gray-500">Author: {user.name}</p>
            <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
