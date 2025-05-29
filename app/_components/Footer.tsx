"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./LinksBar";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <FaFacebookF className="text-xl" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <IoLogoTwitter className="text-xl" />,
  },
  {
    name: "Pinterest",
    href: "#",
    icon: <FaPinterestP className="text-xl" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <FaInstagramSquare className="text-xl" />,
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <section className="w-full flex items-center justify-center bg-black text-white font-alata  ">
      <div className=" w-[90%] flex flex-col sm:flex-row justify-between items-center py-8">
        <div>
          <Link href="/" className="text-3xl font-bold">
            loopstudios
          </Link>
          <ul className="flex flex-col sm:flex-row gap-4 md:gap-8 text-lg items-center justify-center ">
            {navLinks.map((link) => (
              <li key={link.name} className="group mt-2">
                <Link href={link.href}>{link.name}</Link>
                {pathname === link.href ? (
                  <hr className="border-white border-b w-[60%] mx-auto my-1" />
                ) : (
                  <hr className="border-white border-b w-[60%] mx-auto my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="flex gap-10 text-sm items-center justify-center sm:justify-end my-4">
            {socialLinks.map((link) => (
              <li key={link.name} className=" group mt-2 gap-8">
                <Link href={link.href}>{link.icon}</Link>
                <hr className="border-white border-b w-[80%] mt-2 mx-auto my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </li>
            ))}
          </ul>
          <p className=" text-slate-500 text-center sm:text-right">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
