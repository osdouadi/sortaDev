import React from 'react';

export default function Contact() {
  return (
    <section>
      <div className="contact text-center py-10 px-4">
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

        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-1 lg:max-w-[50%] mx-auto">
            <div>
              <label
                for="full-name"
                class="block mb-2 text-base font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[3.3rem]"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-base font-medium  text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[3.3rem]"
                placeholder="Your phone used for whatsApp"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-base font-medium  text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[3.3rem]"
                placeholder="youremail@"
                required
              />
            </div>
            <div>
              <label
                for="message"
                class="block mb-2  text-base font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className=" border text-base rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white h-[12rem]"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn w-[50%]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
