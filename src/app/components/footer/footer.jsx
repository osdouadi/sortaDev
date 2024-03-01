import React from 'react'

export default function Footer() {
  return (
    <section>
      <div className="footer flex flex-col items-center text-center">
        <div className="footer-links mb-3">
          <ul className='flex items-center gap-2 justify-center flex-wrap'>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <span className='text-gray-300/90 text-sm pb-2'>Developed by Oussama Douadi</span>   
        <span className='text-gray-300/90 text-sm mb-4'>Made with Next.js Taiwlind CSS, Node.js Express.js, and MongoDB</span>   
        <span className='text-gray-300/90 text-sm pb-2'>Copy rights reserved &copy; 2024</span>   
      </div>
    </section>
  );
}
