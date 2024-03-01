'use client';

import React from 'react';
import PlusRight from '../svg/plus-right';
import PlusLeft from '../svg/plus-left';
import AboutSvg from '../svg/about-svg';
import { motion } from 'framer-motion';



export default function About() {
  return (
    <section>
      <div className="section-title-container w-full overflow-hidden flex justify-center mx-auto relative ">
        <div className="section-title-layer">
          <PlusLeft color="#5fa8a0" />
          <span className="opacity-60 uppercase">About me</span>
          <PlusRight color="#5fa8a0" />
          <p className=" font-thin">About me</p>
        </div>

        <h3 className="section-title text-center absolute"></h3>
      </div>
      <div className="flex flex-col px-6 py-5 lg:flex-row lg:justify-center lg:items-center ">
        <div className="about-text lg:w-[49%]">
          <motion.p
            initial={{ opacity: 0.4, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Full Stack Developer, proficient in crafting high-performance
            application. Specializing in React, Next.js TypeScript, Node.js,
            Express.js, MongoDB, Tailwind and many other development
            technologies.
            <br />
            I am adept at creating web applications with intuitive, user-centric
            interfaces. I am committed to upholding industry best practices,
            including writing clean and maintainable code, to insure scalability
            and efficiency.
            <br />
            Determind top deliver top-tier solutions and I thrive on embracing
            the latest technologies to create immersive user experiences.
          </motion.p>
        </div>
        <motion.div
          className="about-svg"
          initial={{ opacity: 0.4, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutSvg />
        </motion.div>
      </div>
    </section>
  );
}
