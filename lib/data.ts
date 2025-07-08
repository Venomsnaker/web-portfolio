import React from "react";
import { FaGamepad, FaUniversity } from "react-icons/fa";
import imgProject from "@/public/img-project.jpg"
import imgCode from "@/public/img-code.jpg"
import imgCreativity from "@/public/img-creativity.jpg"

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
    date: "2019-2022",
  },
  {
    title: "HCMUS Senior",
    location: "Ho Chi Minh city, Viet Nam",
    description:
      "I'm majoring in Artificial Intelligence in Ho Chi Minh University of Science.",
    icon: React.createElement(FaUniversity),
    date: "2022-2026",
  },
] as const;

export const projectsData = [
  {
    title: "University Projects",
    description:
      "Small-scale projects that I participated in during my college years. I have learned many valuable skills from my mentors and friends while creating these projects.",
    tags: ["Git", "C++", "Python", "SQL"],
    imageUrl: imgCode,
  },
  {
    title: "Artificial Intelligence Projects",
    description:
      "I am working on various AI topics to support my bachelor's degree. Currently, I'm tackling detecting hallucination in LMMs.",
    tags: ["Project Management", "Python", "NLP"],
    imageUrl: imgProject,
  },
  {
    title: "Indie Game Projects",
    description:
      "I have worked on various indie games, participating in GMTK 2019 and GMTK 2020. All games are in 2D built using Unity, but I'm moving toward building 3D games with Unreal Engine as a hobby.",
    tags: ["Unity", "Unreal Engine"],
    imageUrl: imgCreativity,
  },
] as const;

export const skillsData = [
  "Git",
  "C++",
  "C#",
  "Python",
  "SQL",
  "Unity",
  "Unreal Engine",
] as const;
