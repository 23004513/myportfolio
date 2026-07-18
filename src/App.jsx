import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./Experience";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <ParticlesBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

    </div>
  );
}

export default App;