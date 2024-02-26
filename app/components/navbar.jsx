"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  // varyantlar menu ikonunun animasyonu için
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      // animasyonda renk  kullanıyorsan rgb color kullanman hata almamak adına daha iyi olabilir
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      // animasyonda renk  kullanıyorsan rgb color kullanman hata almamak adına daha iyi olabilir
      backgroundColor: "rgb(255,255,255)",
    },
  };
  // x:"100vw" menu listesini başlangıçta ekran dışında bir yere koyuyor, animasyonla yerine geliyor
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      // transition staggerChildren amacı listItemVariants işlemini children'a sıra ile 0.2 sn gecikme ile yaptırmak
      transition:{
        when:"beforeChildren",
        // when:"beforeChildren" amacı listVariants animasyonu bittikten sonra listItemVariants animasyonunu başlatmak 
     
        staggerChildren:0.2,
      }
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity:0,
    },
    opened: {
      x: 0,
      opacity:1,
    },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-2 font-semibold "
        >
          <span className="text-white m-1">Emre</span>
          <span className="w-12 h-8 rounded bg-white text-black p-1">.dev</span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        {/* düzelt relative parenta verilir */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          // onClick={() => setOpen((prev)=>!prev)}
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            // origin-left animasyonun referans noktası için
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              // buradaki Link'e animasyon vermek istiyoruz ama Link bir html elementi değil, bir react componentidir
              // Bu nedenle animasyon vermek için Link'i motion.div ile sarmaladık
              <motion.div variants={listItemVariants} className="" key={link.title}>
                <Link href={link.url} >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
