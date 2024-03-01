import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      
      <div className="section" id='hero'>
        <Hero />
      </div>
      <div className="section" id='about'>
        <About />
      </div>
      <div className="section" id='skills'>
        <Skills />
      </div>
      <div className="section" id='experience'>
        <Experience />
      </div>
      <div className="section" id='contact'>
        <Contact />
      </div>
    </main>
  );
}
