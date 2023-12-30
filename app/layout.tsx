import type { Metadata } from "next";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huy Bui | Personal Portfolio",
  description:
    "Huy Bui (Gunter) is a somophone at Ho Chi Minh University of Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "${inter.className} g-gray-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-slate-50 dark:text-opacity-90 h-[5000px]"
        }
      >
        <div className="bg-[#dbeafe] absolute top-[-1rem] -z-10 right-[5rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-cyan-950"></div>
        <div className="bg-[#e0f2fe] absolute top-[-1rem] -z-10 left-[-5rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-950"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
