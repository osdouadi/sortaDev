import React from 'react';

export default function Footer() {
  return (
    <section>
      <div className="footer flex flex-col items-center text-center">
        <div className="footer-links mb-3">
          <ul className="flex items-center gap-4 justify-center flex-wrap">
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <span className="text-gray-300/90 text-base pb-2 lg:text-xl">
          Developed by Oussama Douadi
        </span>
        <span className="text-gray-300/90 text-base mb-4 lg:text-xl px-2">
          Made with Next.js, React, and Tailwind CSS
        </span>
        <span className="text-gray-300/90 text-sm pb-2 lg:text-lg relative pt-1 copy-rights">
          Copy rights reserved &copy; 2024
        </span>
      </div>
    </section>
  );
}
