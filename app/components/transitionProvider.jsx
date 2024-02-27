"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    // mode="wait"; aşağıdaki ikinci motion'ın başlaması için ilk motion'ın bitmesini beklemesini sağlıyor
    <AnimatePresence mode="wait">
      {/* bu componentimizin animasyonun ne zaman tetikleneceğini bilmesi için key="" dedik.
        key değiştikçe animasyon tetikelnecek.*/}
      <div
        key={pathName}
        className="w-screen h-screen bg-red-500 bg-gradient-to-b from-blue-100 to-red-100"
      >
        {/* bu ilk motion yukardan aşağın iniş animasyonu için */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          // exit={{ height: "100vh" }} dü başta kenarlar rounded olduğu için alt kenarlarda boşluk olmasın diye 120 yaptıldı
          exit={{ height: "120vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* bu orta motion 
        w-fit h-fit kaplanılan alanın sadece {pathName} stringinin büyüklüğü kadar olmasını sağlıyor
        */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          //ilk hali böyleydi animate={{ opacity: 1 }} exit={{ opacity: 0 }} ama animasyon sonunda yazının sürekli gözükmemesi için initial ekledik
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* substring kelime başındaki / sı silmek için */}
          {pathName.substring(1)}
        </motion.div>
        {/* bu ikinci motion yukardan aşağın iniş animasyonu için */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "120vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
