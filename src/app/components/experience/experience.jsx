'use client';

import React from 'react';
import PlusLeft from '../svg/plus-left';
import PlusRight from '../svg/plus-right';
import { skillsData } from '@/app/lib/data/data';
import { FaLink } from 'react-icons/fa6';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { LuGraduationCap } from 'react-icons/lu';
import { MdOutlineWorkOutline } from 'react-icons/md';
import Banner from '../banner/banner';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section>
      <div
        className="w-full h-[3rem] py-8 flex items-center lg:h-[7rem] my-5 lg:my-10"
        style={{ background: 'var(--color-brand-secondary)' }}
      >
        <div className="section-title-container-with-bg w-full overflow-hidden flex justify-center mx-auto relative  ">
          <div className="section-title-layer">
            <PlusLeft color="#263238" />
            <span className="opacity-60 uppercase">Experience</span>
            <PlusRight color="#263238" />
            <p className="font-thin">Experience</p>
          </div>

          <h3 className="section-title text-center absolute"></h3>
        </div>
      </div>
      <div className="skills-container py-5 flex flex-col items-start px-2 lg:flex-row lg:flex-wrap lg:px-6 ">
        <motion.div
          className="education mb-7 lg:w-[35%]"
          initial={{ opacity: 0.4, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="flex items-center gap-2">
            <LuGraduationCap />
            Education
          </h3>
          <div className="wrapper-experience flex flex-col gap-1 lg:gap-2 mb-3">
            <div className="flex flex-col items-start text-gray-300">
              <span className="text-[#5fa8a0] flex items-center gap-2">
                <LuGraduationCap />
                Master's Degree{' '}
              </span>
              <div className="flex flex-row items-center">
                <span className="text-gray-200">Djelfa University</span>
                <span className="ml-2 text-gray-200">2024</span>
              </div>
            </div>
            <span className="text-gray-200">International Law</span>
          </div>
          <div className=" wrapper-experience flex flex-col gap-1 lg:gap-2 mb-3">
            <div className="flex flex-col items-start text-gray-300">
              <span className="text-[#5fa8a0] flex items-center gap-2">
                <LuGraduationCap />
                Bachelor's Degree{' '}
              </span>
              <div className="flex flex-row items-center">
                <span className="text-gray-200">Djelfa University</span>
                <span className="ml-2 text-gray-200">2022</span>
              </div>
            </div>
            <span className="text-gray-200">Public Law</span>
          </div>
          <div className="wrapper-experience  flex flex-col gap-1 lg:gap-2 mb-3">
            <div className="flex flex-col items-start text-gray-300">
              <span className="text-[#5fa8a0] flex items-center gap-2">
                <LuGraduationCap />
                High School{' '}
              </span>
              <div className="flex flex-row items-center">
                <span className="text-gray-200"> - Said Ait Masoudan</span>
                <span className="ml-2 text-gray-200">2019</span>
              </div>
            </div>
            <span className="text-gray-200">Science</span>
          </div>
        </motion.div>
        <motion.div
          className="experience mb-7 lg:w-[60%]"
          initial={{ opacity: 0.4, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="flex items-center gap-2">
            <MdOutlineWorkOutline />
            Experience
          </h3>
          <div className="wrapper-experience  flex flex-col gap-2 mb-4">
            <div className="flex flex-col items-start text-gray-300">
              <span className="text-[#5fa8a0] flex items-center gap-2">
                <MdOutlineWorkOutline />
                Djelfa Developers Club{' '}
              </span>
              <div className="flex flex-row items-center">
                <span className="text-gray-300">Active Member since</span>
                <span className="ml-2 text-gray-300">2022</span>
              </div>
            </div>
            <ul className="text-gray-200 experience-description">
              <li>
                {' '}
                Since joining the club, I have contributed to many activities
                organized by the club.{' '}
              </li>
              <li>
                We have organized numerous programming competitions as well as
                training and educational courses.
              </li>
              <li>
                Through these experiences, I honed my ability to collaborate
                effectively within a team of developers.
              </li>
              <li>I expanded my expertise in programming fundamentals.</li>
            </ul>
          </div>
          <div className="wrapper-experience  flex flex-col gap-2 mb-4">
            <div className="flex flex-col items-start text-gray-300">
              <span className="text-[#5fa8a0] flex items-center gap-2">
                <MdOutlineWorkOutline />
                Alshamel | Kwait{' '}
              </span>
              <div>
                <span className="text-gray-300">Frontend Developer,</span>
                <span className="ml-2 text-gray-300">Remote | 6 months</span>
              </div>
            </div>
            <ul className="text-gray-200 experience-description ">
              <li>
                I remotely worked with a team of 8 developers as a frontend
                developer in erp application.
              </li>
              <li>
                This application has separate programs like pos and real state,
                archiving etc..
              </li>
              <li>
                Each program has screens and modules, each client or partner may
                have one or more programs for every company he owns.
              </li>
              <li>
                The company rents these programs to the client during a specific
                period, and that period is determined by the administration.{' '}
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="freelance">
          <h3>Freelance and Personal Projects</h3>
          <div className="projects-container  p-4 flex justify-center items-center flex-wrap gap-12 lg:mx-auto">
            <motion.div
              className="project-card w-full lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md"
              initial={{ opacity: 0.4, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className=" pb-3 text-gray-300 ">
                <h1 className="project-name">Abak | Frontend Part</h1>
              </div>
              <div className="project-image h-[39vw] lg:h-[23vw] overflow-hidden w-full">
                <img
                  src="/images/abak-showcase.png"
                  alt="project"
                  className="block h-[39vw] lg:h-[23vw] overflow-hidden w-full  rounded-sm"
                />
              </div>
              <div className="text-left pt-4 px-4">
                <p className="text-gray-200 text-xl">Application built with:</p>
                <div className="tech-container flex items-center flex-wrap w-full gap-3 py-3">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Tailwind</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span>MUI</span>
                  <span>Rest API</span>
                </div>
              </div>
              <div className="project-description px-3">
                <p className="project-features text-gray-300 py-5 font-semibold">
                  Application Features
                </p>
                <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
                  <li>- This Application is for a Saudi Consultancy</li>
                  <li>
                    - This application has authentication system (register,
                    login), I used Redux & context API for handling
                    authentication.
                  </li>
                  <li>
                    - Admin can send reports and notes to the clients who made
                    orders.
                  </li>
                  <li>
                    - Order managment system that includes making order,
                    recieving the order by the admin and updating their status.
                  </li>
                  <li>
                    - Admin can create, update, delete categories and services
                  </li>
                  <li>
                    - Admin can add projects to the protfolio as well as images
                    to the gallery.
                  </li>
                  <li>- I developed Admin dashboard for this application.</li>
                </ul>
              </div>
              <div className="project-action flex items-center justify-center gap-4 mt-4">
                <Link
                  href="https://abak.com.sa"
                  className="visit-project-link font-semibold flex items-center justify-center gap-2"
                >
                  <FaLink className="visit-project-icon" />
                  Demo
                </Link>
                <Link
                  href="https://github.com/osdouadi/abak"
                  className="visit-project-link font-semibold flex items-center justify-center gap-2"
                >
                  <TbBrandGithubFilled className="visit-project-icon" />
                  Github
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="project-card w-full lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md"
              initial={{ opacity: 0.4, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className=" pb-3 text-gray-300 ">
                <h1 className="project-name">Online Store | Full-stack</h1>
              </div>
              <div className="project-image max-h-[39vw]  lg:max-h-[23vw] overflow-hidden w-full">
                <img
                  src="/images/next-project.png"
                  alt="project"
                  className="block h-[39vw] lg:h-[23vw] overflow-hidden w-full  rounded-sm"
                />
              </div>
              <div className="text-left pt-4 px-4">
                <p className="text-gray-200 text-xl">Application built with:</p>
                <div className="tech-container flex items-center flex-wrap w-full gap-3 py-3">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span>Tailwind</span>
                  <span>Next.js</span>
                  <span>MongoDB</span>
                  <span>Mongoose</span>
                </div>
              </div>
              <div className="project-description px-3">
                <p className="project-features text-gray-300 py-5 font-semibold">
                  Application Features
                </p>
                <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
                  <li>
                    - Full CRUD operations for e-commerce functionalities.
                  </li>
                  <li>- Server-side pagination, filteration and sorting.</li>
                  <li>
                    - Users can add products to the cart and make an order.
                  </li>
                  <li>- Responsive design and browser compatibility.</li>
                  <li>
                    - I added file uploading system, so that the admin can
                    upload and add images to the products and categories
                  </li>
                  <li>
                    - Coding best practices including writting a clean code and
                    maintainbale logic were followed during development.
                  </li>
                  <li>
                    - I developed A full-stack JWT based authentication and
                    authorization systems.
                  </li>
                </ul>
              </div>
              <div className=" project-action flex items-center justify-center gap-4  mt-4">
                <Link
                  href="https://github.com/osdouadi/nextjs-ecommerce"
                  className="visit-project-link font-semibold flex items-center justify-center gap-2"
                >
                  <TbBrandGithubFilled className="visit-project-icon" />
                  Github
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="project-card w-full lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md"
              initial={{ opacity: 0.4, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className=" pb-3 text-gray-300 ">
                <h1 className="project-name">E-commerce | Backend</h1>
              </div>
              <div className="project-image max-h-[39vw] lg:max-h-[23vw] overflow-hidden w-full">
                <img
                  src="/images/node.jpg"
                  alt="project"
                  className="block h-[39vw] lg:h-[23vw] overflow-hidden w-full  rounded-sm"
                />
              </div>
              <div className="text-left pt-4 px-4">
                <p className="text-gray-200 text-xl">Application built with:</p>
                <div className="tech-container flex items-center flex-wrap w-full gap-3 py-3">
                  <span>JavaScript</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>Mongoose</span>
                  <span>JWT</span>
                </div>
              </div>
              <div className="project-description px-3">
                <p className="project-features text-gray-300 py-5 font-semibold">
                  Application Features
                </p>
                <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
                  <li>
                    - I developed an API for e-shop using Node.js, express.js,
                    mongoDB as Database.
                  </li>
                  <li>
                    - I developed all CRUD required for any e-commerce (create,
                    update, delete, get one, get all).
                  </li>
                  <li>
                    - I developed server-side pagination, filteration, and
                    sorting.
                  </li>
                  <li>
                    - Backend calculcation for the total price and discount
                    prices.
                  </li>
                  <li>
                    - Authentication and authorization system based on JWT
                  </li>
                  <li>
                    - File upload system, so that the admin can upload images to
                    the products and categories
                  </li>
                  <li>
                    - A role based access controll (RBAC): [Super admin, user].
                  </li>
                  <li>
                    - Coding best practices including writting a clean code and
                    maintainbale logic were followed during development.
                  </li>
                </ul>
              </div>
              <div className=" project-action flex items-center justify-center gap-4  mt-4">
                <Link
                  href="https://github.com/osdouadi/online-store-api-node"
                  className="visit-project-link font-semibold flex items-center justify-center gap-2"
                >
                  <TbBrandGithubFilled className="visit-project-icon" />
                  Github
                </Link>
              </div>
            </motion.div>
          </div>
          <Banner />
        </div>
      </div>
    </section>
  );
}
