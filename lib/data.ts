import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import logo from "@/public/image.png";



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
    title: "Software Developer",
    location: "As You Like Tours and Travels, Canada",
    description:
      "Working with the Travel Agency. Building e-platform for purchasing cheaper tour and flight tickets using amadeus API.",
    icon: React.createElement(FaPlane),
    date: "May 2025 - present",
  },
  {
    title: "Research Assitant",
    location: "University of Guelph, Canada",
    description:
      "Wokring with professor and other researchers on an HCI research project.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025- Aug 2025",
  },
  {
    title: "Teaching Assitant",
    location: "University of Guelph, Canada",
    description:
      "Helping professor for course development. Built Automated testing system for assignments. Led labs for 30-35 students.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Apr 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Code Comprehension",
    description:
      "Developed a sophisticated tool for understanding and summarizing code across various programming languages using advanced LLMs.",
    tags: ["React", "Express", "HuggingFace", "Tailwind", "CodeT5"],
    imageUrl: logo
  
  ,
  },
  {
    title: "Bhagvad Geeta Chatbot",
    description:
      "Developed a chatbot that answers questions related to Hinduism and teaches the lessons of the Bhagvad Geeta.",
    tags: ["React", "MongoDB", "RestAPIs", "Tailwind", "Express"],
    imageUrl: rmtdevImg,
  },

  {
    title: "Canadian Jobs Data Analysis Project",
    description:
      "Analyzed job vacancy data by applying statistical methods to identify trends and correlations. Visualized data using Python, Matplotlib, and Seaborn.",
    tags: ["Python", "Census Data", "Agile methods"],
    imageUrl: "",
  },
  {
    title: "TryToLaugh",
    description:
      "Built an interactive Random Joke Generator using HTML, CSS, and JavaScript to enhance user engagement.",
    tags: ["CSS", "JavaScript", "API"],
    imageUrl: "",
  },
  {
    title: "Similar Sites Recommender Chrome Extension",
    description:
      "Developed the 'Similar Site Recommender' Chrome extension using the SimilarWeb API to suggest websites with similar content and usage to the current tab, solving the challenge of finding related sites efficiently.",
    tags: ["Chrome Dev Tools", "JavaScript", "API"],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  
  "Node.js",
  "Git",
  "Tailwind",


  "HuggingFace",
  "Bootstrap",
  "Material UI",
  "Three.js",
  "Framer Motion",
  "Figma",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  
  
  "MongoDB",
  "MySQL",
  "R",
  "Express",
  "Flask",
  "PyTorch",
  "TensorFlow",
  "Java",
  "Python",
  "C",
  "C++",

  "Django",
  "Framer Motion",
] as const;
