import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Projects from "./components/sections/projects";
import Experience from "./components/sections/experience";
import Contact from "./components/sections/contact";
import Blogs from "./components/sections/blogs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
