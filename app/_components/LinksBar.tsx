"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Events", href: "/events" },
  { name: "Products", href: "/products" },
  { name: "Support", href: "/support" },
];

export default function LinksBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center">
      <ul className="hidden sm:flex gap-8 text-lg items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.name} className="group mt-2">
            <Link href={link.href} className=" ">
              {link.name}
            </Link>
            {pathname === link.href ? (
              <hr className="border-white border-b w-[60%] mx-auto my-1" />
            ) : (
              <hr className="border-white border-b w-[60%] mx-auto my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            )}
          </li>
        ))}
      </ul>
      <GiHamburgerMenu className="text-3xl hover:text-white/60 cursor-pointer sm:hidden" />
    </div>
  );
}
