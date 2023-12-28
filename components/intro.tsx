"use client";
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import avatar from "@/public/avatar.jpg"

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
              duration: 0.2,
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
            className="absolute bottom-0 left-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
    </section>
  )
}

export default intro