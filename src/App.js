import About from "./components/About"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}