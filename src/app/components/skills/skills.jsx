'use client';

import React from 'react';
import PlusLeft from '../svg/plus-left';
import PlusRight from '../svg/plus-right';
import { skillsData } from '@/app/lib/data/data';
import { motion } from 'framer-motion';

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section>
      <div
        className="w-full h-[4.5rem] py-10 flex items-center lg:h-[7rem] my-5 lg:my-10"
        style={{ background: 'var(--color-brand-orange)' }}
      >
        <div className="section-title-container-with-bg w-full overflow-hidden flex justify-center mx-auto relative ">
          <div className="section-title-layer">
            <PlusLeft color="#263238" />
            <span className="opacity-60 uppercase">Skills</span>
            <PlusRight color="#263238" />
            <p className="font-thin">Skills</p>
          </div>

          <h3 className="section-title text-center absolute"></h3>
        </div>
      </div>
      <div className="skills-container py-5 flex flex-col items-start  px-2 lg:px-6">
        <div className="programming mb-7 ">
          <h3>Programming Skills</h3>
          <div className="flex flex-wrap items-center w-full justify-center ">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center flex-col gap-2  m-3 "
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <div className="w-[60px] h-[60px]  lg:w-[70px] lg:h-[70px] rounded-full relative overflow-hidden  flex justify-center text-center items-center mb-1 lg:mb-2">
                  <img
                    src={skill.image}
                    alt="skill"
                    className=" w-full h-full absolute rounded-full  object-contain p-1 "
                  />
                </div>

                <span className="skill-name text-xl ">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full flex-wrap px-2 sm:px-0">
          <div className="lang w-full lg:w-1/2">
            <h3>Languages</h3>
            <div className="w-[80%] relative  mx-auto sm:mx-0">
              <div className="flex flex-col  gap-1 mb-3 ">
                <div className="flex flex-row items-center  gap-2 ">
                  <img
                    src="/images/algeria.svg"
                    alt="arabic"
                    className="w-[50px] h-[50px] rounded-3xl"
                  />
                  <span>Arabic</span>
                  <div className=" text-base font-medium text-gray-50 absolute right-0 ">
                    <span>Native</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                    className="lang-level h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
              </div>

              <div className="flex flex-col  gap-1 mb-3">
                <div className="flex flex-row items-center  gap-2 ">
                  <img
                    src="/images/english.svg"
                    alt="english"
                    className="w-[50px] h-[50px] rounded-3xl"
                  />
                  <span>English</span>
                  <div className=" text-base font-medium text-gray-50 absolute right-0 ">
                    <span>Fluent</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                    className="lang-level h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-3">
                <div className="flex flex-row items-center  gap-2  ">
                  <img
                    src="/images/spanish.svg"
                    alt="spanish"
                    className="w-[50px] h-[50px] rounded-3xl"
                  />
                  <span>Spanish</span>
                  <div className=" text-base font-medium text-gray-50 absolute right-0 ">
                    <span>Advanced</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                    className="lang-level h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
              </div>
              <div className="flex flex-col  gap-1 mb-3 ">
                <div className="flex flex-row items-center  gap-2 ">
                  <img
                    src="/images/french.svg"
                    alt="french"
                    className="w-[50px] h-[50px] rounded-3xl"
                  />
                  <span>French</span>
                  <div className=" text-base font-medium text-gray-50 absolute right-0 ">
                    <span>Basic</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <motion.div
                    className="lang-level h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '35%' }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="soft w-full lg:w-1/2 mt-5 sm:mt-0">
            <h3>Soft Skills</h3>
            <div className="lg:w-[80%] w-full relative flex flex-col gap-10">
              <div className="flex flex-col  gap-1 ">
                <div className="flex flex-col  text-center sm:flex-row sm:text-left  items-center  gap-2 ">
                  <img
                    src="/images/debate.svg"
                    alt="debate"
                    className="w-[50px] h-[50px]  rounded-3xl"
                  />

                  <span className="text-gray-50">
                    Debator with the Algeria foundation for debates
                  </span>
                </div>
              </div>
              <div className="flex flex-col  gap-1 ">
                <div className="flex flex-col text-center sm:flex-row items-center sm:text-left  gap-2 ">
                  <img
                    src="/images/team.svg"
                    alt="team"
                    className="w-[50px] h-[50px] rounded-3xl"
                  />

                  <span className="text-gray-50">
                    Teamwork and ability to manage tasks with a team
                  </span>
                </div>
              </div>
              <div className="flex flex-col  gap-1 ">
                <div className="flex flex-col text-center sm:flex-row items-center  gap-2 ">
                  <img
                    src="/images/time.svg"
                    alt="time"
                    className="w-[45px] h-[45px] rounded-3xl"
                  />
                  <span className="text-gray-50">Time Management</span>
                </div>
              </div>
              <div className="flex flex-col  gap-1 ">
                <div className="flex flex-col text-center sm:flex-row items-center  gap-2">
                  <img
                    src="/images/problem.svg"
                    alt="problem"
                    className="w-[45px] h-[45px] rounded-3xl"
                  />
                  <span className="text-gray-50">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
