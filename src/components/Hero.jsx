import { useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import profile from "../assets/images/profile.jpeg"
import cv from "../assets/Harikrishnan_CV.pdf"

function Hero() {

  const [split, setSplit] = useState(false)
  const [expand, setExpand] = useState(false)

  useEffect(() => {

    const hero = document.querySelector(".hero")

    const handleMove = (e) => {
      hero.style.setProperty("--x", e.clientX + "px")
      hero.style.setProperty("--y", e.clientY + "px")
    }

    hero.addEventListener("mousemove", handleMove)

    setTimeout(() => setSplit(true), 1200)
    setTimeout(() => setExpand(true), 2000)

    return () => hero.removeEventListener("mousemove", handleMove)

  }, [])

  return (
    <section className="hero">

      <div className="hero-left">

        <div className="freelance-badge">
          <span className="dot"></span>
          AVAILABLE FOR FREELANCE
        </div>

        {/* NAME ANIMATION */}

<h1 className="hero-title">

<span className={`har ${split ? "move-left" : ""}`}>
HAR
</span>

{expand && <span className="middle">IKRISHA</span>}

<span className={`on ${split ? "move-right" : ""}`}>
{expand ? "N" : "ON"}
</span>

</h1>

        {/* ROLE ANIMATION */}

        <h2 className="hero-role">
          <TypeAnimation
            sequence={[
              "FULL STACK DEVELOPER",
              2000,
              "REACT DEVELOPER",
              2000,
              "WEB APPLICATION BUILDER"
            ]}
            speed={60}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-desc">
          I craft high-performance digital experiences that live
          at the intersection of engineering and design — pixel-perfect,
          blazing fast, unforgettable.
        </p>

        {/* SOCIAL ICONS */}

        <div className="hero-social">

          <a href="mailto:nharikrishnan13@gmail.com">
            <FaEnvelope />
          </a>

          <a href="https://github.com/harikrishnan2802">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/hari-krishnan-928618309">
            <FaLinkedin />
          </a>

        </div>

        {/* DOWNLOAD CV */}

        <a href={cv} download className="download-btn">
          <FaDownload /> Download CV
        </a>

      </div>

      <div className="hero-right">
        <div className="hero-image">
          <img src={profile} alt="Harikrishnan" />
        </div>
      </div>

    </section>
  )
}

export default Hero