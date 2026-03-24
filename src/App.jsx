import { useState } from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Hero from "./components/Hero"
import About from "./components/About"
import AcademicTimeline from "./components/AcademicTimeline"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
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
      <AcademicTimeline />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App