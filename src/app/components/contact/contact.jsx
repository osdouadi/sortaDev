'use client';
import { sendEmail } from '@/server/send-email';
import React, { useState } from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { PiPhoneCall } from 'react-icons/pi';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { useFormState } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    toast.success('Message sent successfully');
    const formData = new FormData(event.target);
    const data = await sendEmail(formData);
    setPending(false);
  };

  return (
    <section>
      <div className="contact text-center py-7 px-4 w-full">
        <div className="contact-content mb-5 lg:mb-7">
          <h3 className="text-title text-gray-300 uppercase font-semibold ">
            Talk with the
            <span> devloper</span>
          </h3>
          <p className="text-gray-300 py-3 lg:py-4">
            Let’s make something new, different and more meaningful, let's make
            our dream a digital reality.
          </p>
        </div>
        <div className=" flex flex-row w-full justify-center flex-wrap gap-7 mb-4 lg:mb-5">
          <div className="contact-card flex flex-col p-4 bg-[#ea9b19] rounded-md mb-6 w-[80%] md:w-[40%] lg:w-[25%]">
            <span className="contact-info text-black  mb-2 sm:mb-6 flex flex-col lg:flex-row justify-center items-center gap-3">
              <SlEnvolopeLetter className="contact-icon" />
              Email
            </span>
            <span className="info-value text-black">osdouadi@gmail.com</span>
          </div>
          <div className="contact-card flex flex-col p-4  bg-[#ea9b19] rounded-md mb-6 w-[80%] md:w-[40%] lg:w-[25%]">
            <span className=" contact-info text-black mb-2 sm:mb-6 flex flex-col lg:flex-row justify-center items-center gap-3">
              <PiPhoneCall className="contact-icon" />
              Phone
            </span>
            <span className="info-value text-black">(+213)557958797</span>
          </div>
          <div className="contact-card flex flex-col p-4 bg-[#ea9b19] rounded-md mb-6 w-[80%] md:w-[40%] lg:w-[25%]">
            <span className=" contact-info text-black mb-2 sm:mb-6 flex flex-col lg:flex-row justify-center items-center gap-3">
              <SlLocationPin className="contact-icon" />
              Address
            </span>
            <span className="info-value text-black">Algeria - Djelfa</span>
          </div>
        </div>
        <div className="flex items-center justify-between mx-auto w-full">
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div class="grid gap-6 mb-6 md:grid-cols-1 lg:max-w-[50%]  mx-auto">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block mb-2 text-base font-medium text-gray-200 lg:text-2xl "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="senderName"
                    className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[3.3rem]"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-base font-medium  text-gray-200 lg:text-2xl"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="senderPhone"
                    className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[3.3rem]"
                    placeholder="Your phone used for whatsApp"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlfor="email"
                    className="block mb-2 text-base font-medium  text-gray-200 lg:text-2xl"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="senderEmail"
                    className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[3.3rem]"
                    placeholder="youremail@"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2  text-base font-medium text-gray-200 lg:text-2xl"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[12rem]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn w-[50%] " disabled={pending}>
                {pending ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                ) : (
                  <>
                    Send
                    <FaPaperPlane className="text-2xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
