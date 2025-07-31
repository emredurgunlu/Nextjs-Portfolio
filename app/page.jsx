"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    // sayfalar arası transition olurken transition öncesi anlık olarak sayfa içeriği gözükmesin diye bu sayfaya animasyon ekledik.
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Image için fill parenti için relative kullandığımızdan burada h-full yapmazsan resim gözükmez */}
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-y-8 lg:gap-x-12">

        {/* IMAGE CONTAINER */}
        {/* Eğer Image kullanıyorsan width ve height belirtmelisin
  Ama onların yerine fill deyip parenta relative verebilirsin. 
  Böyle olunca parenti kadar yer kaplar yani burası için h1/2 kadar.
  object-contain resmin orjinal en boy oranını koruması için */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full 
                  h-[240px] sm:h-[280px] md:h-[300px] lg:h-[400px] 2xl:h-[500px] 
                  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image src="/photo.jpeg" alt="" fill className="object-contain" />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center text-center px-2 sm:px-6">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
            Hello, I&apos;m Emre — Full Stack Developer
          </h1>

          {/* DESC */}
          <p className="text-base sm:text-lg md:text-xl max-w-xl">
            Specializing in building dynamic, scalable, user-friendly, and high-performance applications with a full-stack approach.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row justify-center gap-4 max-w-sm">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto mb-12 sm:mb-0">
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Homepage;
