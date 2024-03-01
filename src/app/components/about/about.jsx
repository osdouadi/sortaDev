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
          <PlusLeft color="var(--color-brand-orange)" />
          <span className=" uppercase">About me</span>
          <PlusRight color="var(--color-brand-orange)" />
        </div>

        <h3 className="section-title text-center absolute"></h3>
      </div>
      <div className="flex flex-col px-6 py-5 lg:flex-row lg:justify-center lg:items-center ">
        <div className="about-text lg:w-[49%]">
          <motion.p
            initial={{ opacity: 0.4, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Full Stack Developer, proficient in crafting high-performance
            applications. I am adept at creating web applications with
            intuitive, user-centric interfaces.
            <br />
            I am committed to upholding industry best practices, including
            writing clean and maintainable code, to insure scalability and
            efficiency.
            <br />
            Determined to deliver top-tier solutions and I thrive on embracing
            the latest technologies to create immersive user experiences.
          </motion.p>
        </div>
        <motion.div
          className="about-svg"
          initial={{ opacity: 0.4, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutSvg />
        </motion.div>
      </div>
    </section>
  );
}
