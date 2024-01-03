import React from "react";
import { FaGamepad, FaUniversity } from "react-icons/fa";
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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Indie Game Developer",
    location: "Viet Nam",
    description:
      "I worked as a solo indie game developer in my tertiary education years.",
    icon: React.createElement(FaGamepad),
    date: "2019 - 2022",
  },
  {
    title: "Sophomore at HCMUS",
    location: "Ho Chi Minh, Viet Nam",
    description:
      "I'm majoring in Artificial Intelligence with a current GPA > 3.0.",
    icon: React.createElement(FaUniversity),
    date: "2022-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Bachelor Degree Projects",
    description:
      "There are many small-scale projects that I participated in my college years. I have learned many skills from my mentors and friends while creating these projects.",
    tags: ["Git", "C++", "C#", "Python", "R", "Java", "MySQL"],
    imageUrl: codingPanel,
  },
  {
    title: "Social Medias",
    description:
      "Knowing individual weaknesses and strengths is a key to improving oneself. Therefore, I usually keep track of my experience and progress across social media platforms.",
    tags: ["Project Management", "React.js", "Next.js", "Tailwind"],
    imageUrl: linkedin,
  },
  {
    title: "PC Remote Control",
    description:
      "A public Java app to control your PC remotely. Creating it, my first app, teaches me much about the process of app development.",
    tags: ["Java", "Java Socket", "JavaFX"],
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
  "Next.js",
] as const;