import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Image
        src={"/image-from-above-mobile.jpg"}
        fill
        className="object-cover object-top"
        alt="dummy.."
        quality={80}
      />
    </div>
  );
}
