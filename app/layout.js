import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";


const inter = Inter({ subsets: ["latin"] });

// meta data kısmı server side'da çalışır, "use client" olursa metadata işlevsiz olur 
// bu yüzden sayfalar arası geçiş animasyonunu burada yapmak yerine transitionProvider.jsx içinde yaptık
// bu dosyadaki bazı kodları kesip transitionProvider.jsx içine yağıştırdık
// böylece yeni layout'umuz transitionProvider oldu
export const metadata = {
  title: "Full Stack Developer",
  description: "Full Stack Developer, Frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
