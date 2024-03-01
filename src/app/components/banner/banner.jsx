import React from 'react'

export default function Banner() {
  return (
    <section className="banner text-center flex flex-col items-center justify-center">
      <h1 className="uppercase font-bold pb-1">Intrested in my work?</h1>
      <p className="mb-4 font-semibold">Download My CV to know more about me</p>
      <button className="download-mycv">Download CV</button>
    </section>
  );
}
