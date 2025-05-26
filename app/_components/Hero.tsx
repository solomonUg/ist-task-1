import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export default function Hero() {
  return (
    <div>
      <Image
        src={"/image-hero.jpg"}
        fill
        className="object-cover object-top"
        alt="immersive experiences that deliver"
        quality={80}
      />
      <div className="relative w-[80%] lg:w-[40%]  text-white border-2 border-white z-10 lg:ml-16 mx-auto">
        <h1
          className={`text-5xl sm:text-6xl m-3 ${josefin.className} font-extralight`}
        >
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </div>
  );
}
