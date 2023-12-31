"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import avatar from "@/public/avatar.jpg";
import {
  FaArrowAltCircleDown,
  FaArrowCircleDown,
  FaArrowDown,
  FaCircle,
  FaFileDownload,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const intro = () => {
  return (
    <section>
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
        Halo, I'm
        <span className="font-bold"> Huy</span>. I'm a
        <span className="font-bold"> sophomore at HCMUS</span>, who is
        interested in
        <span className="italic underline"> algorithms and arts. </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-950 text-white hover:text-orange-500 m-2 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Contact me here{" "}
          <FaArrowAltCircleDown className="group-hover:translate-y-1 transition" />
        </Link>

        <a
          className="group bg-white hover:text-orange-500 shadow shadow-black/5 m-2 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download my CV{" "}
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
      </motion.div>
    </section>
  );
};

export default intro;
