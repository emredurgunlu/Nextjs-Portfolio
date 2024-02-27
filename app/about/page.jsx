"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl ">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Hello there! I&apos;m Emre, a passionate full stack developer
              dedicated to crafting seamless digital experiences. With a journey
              that began in 2021, I&apos;ve been relentlessly learning and
              refining my skills ever since. I thrive on tackling challenges and
              leveraging both front-end and back-end technologies to create
              innovative solutions. Let&apos;s build something awesome together!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <i>Let&apos;s turn lines of code into works of art!</i>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <Image src="/signature.png" alt="" width="86" height="82"/>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
          </div>
          {/* SKILLS CONTAINER */}
          <div className="">SKILLS</div>
          {/* EXPERIENCE CONTAINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
