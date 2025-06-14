"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MdClose } from "react-icons/md";


export const navLinks = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Events", href: "#" },
  { name: "Products", href: "#" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function LinksBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };
  const pathname = usePathname();

  return (
    <div className="flex items-center">
      <ul className="hidden sm:flex gap-8 text-lg items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.name} className="group mt-2">
            <Link href={link.href}>{link.name}</Link>
            {pathname === link.href ? (
              <hr
                className={`border-b w-[60%] mx-auto my-1 ${
                  pathname === "/" ? "border-white" : "border-black"
                }`}
              />
            ) : (
              <hr
                className={` border-b w-[60%] mx-auto my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  pathname === "/" ? "border-white" : "border-black"
                }`}
              />
            )}
          </li>
        ))}
      </ul>
      <>
        <GiHamburgerMenu
          className="text-3xl hover:text-white/60 cursor-pointer sm:hidden"
          onClick={toggleMenu}
        />
        <Drawer
          open={isOpen}
          onClose={toggleMenu}
          direction="left"
          size={"100%"}
          style={{ backgroundColor: "black" }} 
          className="sm:hidden"
        >
          <div className="text-white mx-8">
            <div className="flex justify-between items-center mt-8">
              <Link href="/" className="text-2xl font-bold" onClick={toggleMenu}>
                loopstudios
              </Link>
              <MdClose
                className="cursor-pointer text-2xl"
                onClick={toggleMenu}
              />
            </div>

            <ul className="flex flex-col gap-4 text-xl  mt-24">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`group mt-2  w-fit`}
                  onClick={toggleMenu}
                >
                  <Link href={link.href}>{link.name.toUpperCase()}</Link>
                  {pathname === link.href ? (
                    <hr className="border-white border-b w-full  my-1" />
                  ) : (
                    <hr className="border-white border-b w-full  my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </>
    </div>
  );
}
