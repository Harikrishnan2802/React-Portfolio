import { useEffect, useState, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import profile from "../assets/images/profile.jpeg"
import cv from "../assets/Harikrishnan_CV.pdf"
import "../styles/Hero.css"

function Hero() {
  const [split, setSplit] = useState(false)
  const [expand, setExpand] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    // Trigger entrance
    const t1 = setTimeout(() => setLoaded(true), 100)
    const t2 = setTimeout(() => setSplit(true), 1200)
    const t3 = setTimeout(() => setExpand(true), 2000)

    const hero = heroRef.current
    if (!hero) return

    // Mouse spotlight
    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect()
      hero.style.setProperty("--mx", (e.clientX - rect.left) + "px")
      hero.style.setProperty("--my", (e.clientY - rect.top) + "px")
    }

    // 3D card tilt
    const card = cardRef.current
    const handleCardMove = (e) => {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      card.style.transform = `perspective(1000px) rotateY(${dx * 5}deg) rotateX(${-dy * 4}deg) translateY(0px)`
    }

    const handleCardLeave = () => {
      if (!card) return
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)"
    }

    hero.addEventListener("mousemove", handleMove)
    card?.addEventListener("mousemove", handleCardMove)
    card?.addEventListener("mouseleave", handleCardLeave)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      hero.removeEventListener("mousemove", handleMove)
      card?.removeEventListener("mousemove", handleCardMove)
      card?.removeEventListener("mouseleave", handleCardLeave)
    }
  }, [])

  return (
    <section className={`hero ${loaded ? "hero--loaded" : ""}`} ref={heroRef}>

      {/* Mouse spotlight */}
      <div className="hero-spotlight" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      {/* Grid texture */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── LEFT CARD ── */}
      <div className="hero-left" ref={cardRef}>

        {/* Card shimmer border */}
        <div className="card-shimmer" aria-hidden="true" />

        <div className="freelance-badge">
          <span className="dot" />
          AVAILABLE FOR FREELANCE
        </div>

        {/* NAME */}
        <h1 className="hero-title">
          <span className={`har ${split ? "move-left" : ""}`}>HAR</span>
          {expand && <span className="middle">IKRISHA</span>}
          <span className={`on ${split ? "move-right" : ""}`}>
            {expand ? "N" : "ON"}
          </span>
        </h1>

        {/* ROLE */}
        <h2 className="hero-role">
          <span className="role-prefix">&lt;</span>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",  2000,
              "React Developer",       2000,
              "Web App Builder",       2000,
            ]}
            speed={55}
            repeat={Infinity}
          />
          <span className="role-suffix"> /&gt;</span>
        </h2>

        <p className="hero-desc">
          I craft high-performance digital experiences that live at the
          intersection of engineering and design — pixel-perfect,
          blazing fast, unforgettable.
        </p>

        {/* STATS ROW */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">6+</span>
            <span className="stat-label">Months Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="hero-social">
          <a href="mailto:nharikrishnan13@gmail.com" aria-label="Email" className="social-link">
            <FaEnvelope />
            <span className="social-tooltip">Email</span>
          </a>
          <a href="https://github.com/harikrishnan2802" aria-label="GitHub" className="social-link">
            <FaGithub />
            <span className="social-tooltip">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/hari-krishnan-928618309" aria-label="LinkedIn" className="social-link">
            <FaLinkedin />
            <span className="social-tooltip">LinkedIn</span>
          </a>
        </div>

        {/* DOWNLOAD CV */}
        <a href={cv} download className="download-btn">
          <FaDownload />
          <span>Download CV</span>
          <div className="btn-shine" aria-hidden="true" />
        </a>

      </div>

      {/* ── RIGHT IMAGE ── */}
      <div className="hero-right">

        {/* Orbit rings */}
        <div className="orbit orbit--1" aria-hidden="true" />
        <div className="orbit orbit--2" aria-hidden="true" />

        <div className="hero-image">
          <img src={profile} alt="Harikrishnan" />
          <div className="image-overlay" aria-hidden="true" />
        </div>

        {/* Floating tag */}
        <div className="float-tag float-tag--tl" aria-hidden="true">
          <span className="float-dot" />React
        </div>
        <div className="float-tag float-tag--br" aria-hidden="true">
          <span className="float-dot float-dot--green" />Open to Work
        </div>

      </div>

    </section>
  )
}

export default Hero