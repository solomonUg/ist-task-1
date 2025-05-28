"use client";
import React from "react";
import LinksBar from "./LinksBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  return (
    <nav
      className={`w-[90%] flex justify-between items-center mt-10 z-50  ${
        pathname.startsWith("/blog") ? "text-black" : "text-white"
      }`}
    >
      <Link href="/" className="text-2xl font-bold">
        loopstudios
      </Link>
      <LinksBar />
    </nav>
  );
}

export default Navigation;
