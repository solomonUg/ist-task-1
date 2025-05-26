import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Image
        src={"/image-hero.jpg"}
        fill
        className="object-cover object-top"
        alt="immersive experiences that deliver"
        quality={80}
      />
    </div>
  );
}
