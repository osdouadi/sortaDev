'use client';

import React from 'react';
import Developer from '../svg/developer';
import HeroSvg from '../svg/hero-svg';
import HeroSvgBlack from '../svg/hero-svg-black';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-section pb-[2rem] pt-[5rem] lg:pt-14 ">
      <div className="hero container relative px-6 lg:px-14 mx-auto ">
        <div className="flex lg:flex-row items-center  -mt-[2rem] lg:mt-0 flex-col-reverse lg:h-[100vh] ">
          <motion.div
            className="intro-text  flex flex-col text-center lg:text-left lg:w-full "
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="header pb-2">Frontend Developer</h3>
            <h2 className="font-semibold pb-1">Oussama Douadi</h2>
            <p>
              A software engineer adept in crafting high-performance systems &
              applications, commited to upholding industry best practices, to
              insure scalability and efficiency.{' '}
            </p>
            <div className="action-buttons flex items-center gap-4 pt-5 flex-col lg:flex-row lg:w-full">
              <a href="/cv.pdf" download className="action-btn-cv">
                {' '}
                Download CV
              </a>
              <button className="uppercase"> Get in touch</button>
            </div>
          </motion.div>
          <motion.div
            className="intro-image h-[18rem] md:h-[22rem] lg:h-[55rem] -mb-[10px] sm:mb-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Developer />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
