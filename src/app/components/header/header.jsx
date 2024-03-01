'use client';
import Link from 'next/link';
import React from 'react';

import { socialMedia, navItems } from '@/app/lib/data/data';
import {motion} from 'framer-motion'

export default function Header() {
  return (
    <div className="header mb-7 lg:mb-0 z-10 bg-[rgb(55,60,66)]/70 drop-shadow-lg fixed top-0 left-0 right-0 w-full">
      <nav className="navbar flex items-center justify-center lg:justify-between py-[0.8rem] lg:py-4 px-1 lg:px-14 ">
        <motion.ul
          className="flex items-center md:gap-5 lg:gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {navItems.map((item, i) => (
            <li key={i} className="mx-2">
              <Link href={item.link} className="list-item">
                {item.title}
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          className="hidden lg:flex lg:items-center lg:gap-5 "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {socialMedia.map((item, i) => (
            <li key={i} className="list-icon">
              <Link href={item.link}>{item.icon}</Link>
            </li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}
