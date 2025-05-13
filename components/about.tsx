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
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    I'm a second-year student at the <span className="font-medium">University of Guelph</span>. I specialize in web design and API development, and I've started exploring <span className="font-medium">machine learning</span> to see how data can power smarter applications. My core tech stack includes  <span className="font-medium">
    ReactJS
        </span>  for front ends, NodeJS and ExpressJS for back ends, TailwindCSS for styling, MySQL for relational data, plus Python and C when I need extra control or want to script something quickly. I'm always excited to pick up a new library or framework and find fresh ways to solve everyday challenges.
      </p>
      <p className="mb-3">

        <span className="font-medium" >Academically </span>, I've balanced coursework in <span className="italic">algorithms</span> and <span className="italic">databases</span>  with hands-on projects—everything from single-page apps to small learning models. Outside of class, I love spending time in the kitchen experimenting with new recipes or getting my heart rate up on the badminton court. Evenings are reserved for family time.
      </p>
      <p className="mb-3">

I'm looking to take on a full-time software role where I can contribute to real products, collaborate with a team, and keep growing as a developer. If you need someone who cares about clean code, clear communication, and a little bit of fun along the way, let's connect!
      
      </p>
      
    </motion.section>
  );
}
