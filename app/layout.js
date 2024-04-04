import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <svg className="pointer-events-none fixed isolate -z-40 opacity-50 mix-blend-soft-light w-screen h-screen top-0 left-0"><filter id="pedroduarteisalegend"><feTurbulence baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" type="fractalNoise"></feTurbulence></filter><rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect></svg>
        <main className="flex flex-col relative z-10 w-screen md:w-4/5 p-10 pb-20 mx-auto gap-5 items-center justify-stretch h-screen">
        {children}
        </main>
        <div className="fixed top-0 left-0 h-screen w-screen bg-[url('/images/blur.svg')] bg-top bg-cover bg-no-repeat opacity-[0.3] will-change-transform"></div>
      </body>
    </html>
  );
}
