import { useState } from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AcademicTimeline from "./components/AcademicTimeline"
import Contact from "./components/Contact"

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && (
        <Intro onComplete={() => setIntroComplete(true)} />
      )}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AcademicTimeline />
      <Contact />
    </>
  )
}

export default App