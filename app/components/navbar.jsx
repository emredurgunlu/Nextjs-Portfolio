"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-2 font-semibold "
        >
          <span className="text-white m-1">Emre</span>
          <span className="w-12 h-8 rounded bg-white text-black p-1">.dev</span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap:4 w-1/3">
        <Link href="#">
        <Image src="/github.png" alt="" width={24} height={24}/>
        </Link>
        <Link href="#">
        <Image src="/linkedin.png" alt="" width={24} height={24}/>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        {/* düzelt relative parenta verilir */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-10 relative"
          // onClick={() => setOpen((prev)=>!prev)}
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
