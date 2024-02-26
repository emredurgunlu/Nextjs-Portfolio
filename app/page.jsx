import Image from "next/image";

const Homepage = () => {
  return (
    // Image için fill parenti için relative kullandığımızdan burada h-full yapmazsan resim gözükmez
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        {/* Eğer Image kullanıyorsan width ve height belirtmelisin
  Ama onların yerine fill deyip parenta relative verebilirsin. 
  Böyle olunca parenti kadar yer kaplar yani burası için h1/2 kadar.
  object-contain resmin orjinal en boy oranını koruması için */}
        <Image src="/photo.jpeg" alt="" fill className="object-contain"/>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Hello, I&apos;m Emre - Full Stack Developer</h1>
        {/* DESC */}
        <p className="md:text-xl">Specializing in building dynamic, scalable, user-friendly, and high-performance applications with a full-stack approach.</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My work</button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
