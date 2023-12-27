import React from "react";
import { FaGamepad, FaReact, FaUniversity } from "react-icons/fa";
import codingPanel from "@/public/coding-panel.png"
import linkedin from "@/public/linkedin.png"
import pcRemoteControl from "@/public/pc-remote-control.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Somophone at Ho Chi Minh University of Science",
    location: "Ho Chi Minh, Viet Nam",
    description:
      "Majoring in Artificial Intelligence. GPA > 3.0.",
    icon: React.createElement(FaUniversity),
    date: "2022-2024",
  },
  {
    title: "Solo Indie Game Developer",
    location: "Viet Nam",
    description:
      "I worked as a solo indie game developer in my tertiary education years. (Unity)",
    icon: React.createElement(FaGamepad),
    date: "2019 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Coding",
    description:
      "I learn a lot from my mentors and friends at HCMUS. Coding is my passion for skewing connective pieces, so I wish to pursue it for quite some time.",
    tags: ["Git", "C++", "C#", "Python", "R", "Java", "MySQL"],
    imageUrl: codingPanel,
  },
  {
    title: "LinkedIn",
    description:
      "Knowing individual weaknesses and strengths is a key to improving oneself. Therefore, I usually keep track of my experience and progress across social media platforms. Please check them out if you are interested.",
    tags: ["Project Management", "React.js", "Next.js", "Tailwind"],
    imageUrl: linkedin,
  },
  {
    title: "PC Remote Control",
    description:
      "It is a public Java app to control your PC remotely. Creating it, my first app, teaches me much about the process of app development.",
    tags: ["Java", "Network", "JavaFX"],
    imageUrl: pcRemoteControl,
  },
] as const;

export const skillsData = [
  "Git",
  "C++",
  "C#",
  "Python",
  "R",
  "Java",
  "MySQL",
  "Unity",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
] as const;