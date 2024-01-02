"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My passion for programming stems from{" "}
        <span className="font-medium">high school</span>, ever since I started
        making indie games with simple code snippets. Later, I enrolled in{" "}
        <span className="font-medium">
          HCMUS - Ho Chi Minh University of Science
        </span>
        , majoring in <span className="underline">Artificial Intelligence</span>
        , which gave me a strong foundation for my career.
        <span className="italic">
          {" "}
          Why Artificial Intelligence, you may ask?
        </span>{" "}
        I am fascinated by the challenges and opportunities it offers for
        solving{" "}
        <span className="font-medium">
          complex problems and creating innovative applications
        </span>
        . <span className="italic">AI is a cutting-edge technology</span>, and
        I'm eager to learn it!{" "}
      </p>

      <p>
        <span className="font-medium">Regarding leisure activities</span>, I
        enjoy caring for my house plants and organizing my room.{" "}
        <span className="italic">
          My belief is that humans can only work effectively in a
          well-maintained environment
        </span>
        . Traveling is quite delightful for my personal life as well.
      </p>
    </motion.section>
  );
}
