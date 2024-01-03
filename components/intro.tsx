"use client";

import React from "react";
import Image from "next/image";
import {
  FaArrowAltCircleDown,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import avatar from "@/public/avatar.jpg";

const intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src={avatar}
              alt="Huy Bui"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-0 text-4xl opacity-100"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 0.8,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-4 mt-4 px-4 text-center text-1xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Greeting! I'm
        <span className="font-bold"> Huy</span>. currently a sophomore at
        <span className="font-bold"> HCMUS</span>. My interests are anything
        related to
        <span className="italic underline"> computers</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <a
          className="group bg-white hover:text-orange-500 shadow shadow-black/5 m-2 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download My CV{" "}
          <FaFileDownload className="group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-950 hover:text-orange-500 shadow shadow-black/5 mx-2 text-opacity-60 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-950 hover:text-orange-500 shadow shadow-black/5 mx-2 text-opacity-60 flex items-center gap-2 text-[1.15rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithub />
        </a>
        <Link
          href={"#contact"}
          className="group bg-gray-950 text-white hover:text-orange-500 m-2 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <FaArrowAltCircleDown className="group-hover:translate-y-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
};

export default intro;
