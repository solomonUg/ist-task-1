import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostCardProps = {
  id: number;
  title: string;
  body: string;
};

export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex rounded-md overflow-hidden">
        <div className="w-full h-[400px] relative">
          <Image src="/image-grid.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{body.slice(0, 100)}...</p>
        <Link href={`/blog/${id}`} className="hover:underline">
          READ MORE...
        </Link>
      </div>
    </div>
  );
}
