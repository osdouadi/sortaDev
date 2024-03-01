import React from 'react'

export default function Banner() {
  return (
    <section className="banner text-center flex flex-col items-center justify-center">
      <h1 className="uppercase font-bold pb-1">Intrested in my work?</h1>
      <p className="mb-4 font-noraml">Please have a look at my CV</p>
      <a className="download-mycv" href='/cv.pdf' download >Download CV</a>
    </section>
  );
}
