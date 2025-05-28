import React from "react";
import Image from "next/image";

export default function CreationCard({
  label,
  mobileImage,
  imageDesktop,
}: {
  label: string;
  mobileImage: string;
  imageDesktop: string;
}) {
  return (
    <div className="w-full h-64 sm:w-64 sm:h-[450px] relative group cursor-pointer">
      {/* mobile image */}
      <Image src={mobileImage} alt={label} fill className="object-cover" />
      {/* desktop image */}
      <Image
        src={imageDesktop}
        fill
        className="object-cover hidden md:block" // Hide on mobile
        priority
        alt="Desktop Hero"
      />

      <h3 className="absolute bottom-8 left-8 text-white text-4xl font-light group-hover:text-black z-10">
        {label.split(" ")[0]} <br /> {label.split(" ")[1]}
      </h3>
      {/* overlay */}
      <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition duration-200 z-0"></div>
    </div>
  );
}
