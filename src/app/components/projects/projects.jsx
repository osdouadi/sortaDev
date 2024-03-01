import React, { Fragment } from 'react';
import PlusLeft from '../svg/plus-left';
import PlusRight from '../svg/plus-right';
import Banner from '../banner/banner';

export default function Projects() {
  return (
    <section>
      <div
        className="w-full h-[3rem] py-8 flex items-center lg:h-[7rem] my-10"
        style={{ background: 'var(--color-brand-secondary)' }}
      >
        <div className="section-title-container-with-bg w-full overflow-hidden flex justify-center mx-auto relative ">
          <div className="section-title-layer">
            <PlusLeft color="#263238" />
            <span className="opacity-60 uppercase">Projects</span>
            <PlusRight color="#263238" />
            <p className="font-thin">Projects</p>
          </div>
          <h3 className="section-title text-center absolute"></h3>
        </div>
      </div>
      <div className="projects-container container p-4 flex justify-center items-center flex-wrap gap-12 mx-auto">
        <div className="project-card w-[90%] lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md">
          <div className="project-title pb-5 text-gray-300 font-semibold">
            <h3>Abak | Frontend Part</h3>
          </div>
          <div className="project-image max-h-[60vw] overflow-hidden w-full">
            <img
              src="/images/abak-showcase.png"
              alt="project"
              className="block max-h-[60vw] overflow-hidden w-full h-auto rounded-sm"
            />
          </div>
          <div className="project-description px-3">
            <p className="project-features text-gray-300 py-5 font-semibold">
              Application Features
            </p>
            <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
              <li>- This Application is for a Saudi Company</li>
              <li>- Authentication system</li>
              <li>- Order Manegment system (Update status, delete order)</li>
              <li>
                - File upload, sending reports and uploading images for
                categories
              </li>
              <li>
                - CRUD, Adding, delete, update and show produts and categories
              </li>
              <li>
                - Responsive Design, User-friendly & Browser compatibility
              </li>
            </ul>
          </div>
          <div className="project-action mt-4">
            <button className="visit-project-link font-semibold">
              Visit project
            </button>
          </div>
        </div>
        <div className="project-card w-[90%] lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md">
          <div className="project-title pb-5 text-gray-300 font-semibold">
            <h3>Abak | Frontend Part</h3>
          </div>
          <div className="project-image max-h-[60vw] overflow-hidden w-full">
            <img
              src="/images/abak-showcase.png"
              alt="project"
              className="block max-h-[60vw] overflow-hidden w-full h-auto rounded-sm"
            />
          </div>
          <div className="project-description px-3">
            <p className="project-features text-gray-300 py-5 font-semibold">
              Application Features
            </p>
            <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
              <li>- This Application is for a Saudi Company</li>
              <li>- Authentication system</li>
              <li>- Order Manegment system (Update status, delete order)</li>
              <li>
                - File upload, sending reports and uploading images for
                categories
              </li>
              <li>
                - CRUD, Adding, delete, update and show produts and categories
              </li>
              <li>
                - Responsive Design, User-friendly & Browser compatibility
              </li>
            </ul>
          </div>
          <div className="project-action mt-4">
            <button className="visit-project-link font-semibold">
              Visit project
            </button>
          </div>
        </div>
        <div className="project-card w-[90%] lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md">
          <div className="project-title pb-5 text-gray-300 font-semibold">
            <h3>Abak | Frontend Part</h3>
          </div>
          <div className="project-image max-h-[60vw] overflow-hidden w-full">
            <img
              src="/images/abak-showcase.png"
              alt="project"
              className="block max-h-[60vw] overflow-hidden w-full h-auto rounded-sm"
            />
          </div>
          <div className="project-description px-3">
            <p className="project-features text-gray-300 py-5 font-semibold">
              Application Features
            </p>
            <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
              <li>- This Application is for a Saudi Company</li>
              <li>- Authentication system</li>
              <li>- Order Manegment system (Update status, delete order)</li>
              <li>
                - File upload, sending reports and uploading images for
                categories
              </li>
              <li>
                - CRUD, Adding, delete, update and show produts and categories
              </li>
              <li>
                - Responsive Design, User-friendly & Browser compatibility
              </li>
            </ul>
          </div>
          <div className="project-action mt-4">
            <button className="visit-project-link font-semibold">
              Visit project
            </button>
          </div>
        </div>
        <div className="project-card w-[90%] lg:w-[44%] py-3 text-center bg-[rgb(57,61,68)] mb-6 rounded-md">
          <div className="project-title pb-5 text-gray-300 font-semibold">
            <h3>Abak | Frontend Part</h3>
          </div>
          <div className="project-image max-h-[60vw] overflow-hidden w-full">
            <img
              src="/images/abak-showcase.png"
              alt="project"
              className="block max-h-[60vw] overflow-hidden w-full h-auto rounded-sm"
            />
          </div>
          <div className="project-description px-3">
            <p className="project-features text-gray-300 py-5 font-semibold">
              Application Features
            </p>
            <ul className="project-features text-gray-300 flex flex-col items-start text-left gap-2 leading-7">
              <li>- This Application is for a Saudi Company</li>
              <li>- Authentication system</li>
              <li>- Order Manegment system (Update status, delete order)</li>
              <li>
                - File upload, sending reports and uploading images for
                categories
              </li>
              <li>
                - CRUD, Adding, delete, update and show produts and categories
              </li>
              <li>
                - Responsive Design, User-friendly & Browser compatibility
              </li>
            </ul>
          </div>
          <div className="project-action mt-4">
            <button className="visit-project-link font-semibold">
              Visit project
            </button>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
}
