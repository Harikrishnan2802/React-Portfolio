import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa"
import { useState, useEffect } from "react"

function Navbar() {

const [darkMode,setDarkMode] = useState(true)

useEffect(()=>{

if(darkMode){
document.body.classList.remove("light")
}else{
document.body.classList.add("light")
}

},[darkMode])

return (

<nav className="navbar">

<div className="nav-container">

<h2 className="logo">Hari<span>.</span></h2>

<ul className="nav-links">

  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#academicTimeline">Education</a></li>
  <li><a href="#contact">Contact</a></li>

</ul>

<div className="nav-actions">

<a href="#contact" className="hire-btn">
Hire Me
</a>

</div>

</div>

</nav>

)

}

export default Navbar