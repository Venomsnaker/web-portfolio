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
    title: "HCMUS Sophomore",
    location: "Ho Chi Minh, Viet Nam",
    description:
      "I'm majoring in Artificial Intelligence with a current GPA of roughly 3.5.",
    icon: React.createElement(FaUniversity),
    date: "2022-2024",
  },
] as const;

export const projectsData = [
  {
    title: "School Projects",
    description:
      "There are many small-scale projects that I participated in my college years. I have learned many valuable skills from my mentors and friends while creating these projects.",
    tags: ["Git", "C++", "C#", "Python", "R", "MySQL"],
    imageUrl: imgCode,
  },
  {
    title: "NLP Projects",
    description:
      "I am working on various NLP topics to support my bachelor's degree in Artificial Intelligence. Currently, I'm tacting with the foundations for LMM.",
    tags: ["Project Management", "Python", "NLP"],
    imageUrl: imgProject,
  },
  {
    title: "Indie Game Projects",
    description:
      "I have worked on various indie games, participating in GMTK 2019 and GMTK 2020. All games are in 2D built using Unity, but I'm moving toward building 3D games with Unreal Engine.",
    tags: ["Unity", "Unreal Engine"],
    imageUrl: imgCreativity,
  },
] as const;

export const skillsData = [
  "Git",
  "C++",
  "C#",
  "Python",
  "R",
  "SQL",
  "Unity",
  "Unreal Engine",
] as const;
