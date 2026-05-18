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
    const t1 = setTimeout(() => setLoaded(true), 100)
    const t2 = setTimeout(() => setSplit(true), 1200)
    const t3 = setTimeout(() => setExpand(true), 2000)

    const hero = heroRef.current
    const card = cardRef.current
    if (!hero) return

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY

      const rect = hero.getBoundingClientRect()
      hero.style.setProperty("--mx", (clientX - rect.left) + "px")
      hero.style.setProperty("--my", (clientY - rect.top) + "px")

      if (card && window.matchMedia("(hover: hover)").matches) {
        const cardRect = card.getBoundingClientRect()
        const cx = cardRect.left + cardRect.width / 2
        const cy = cardRect.top + cardRect.height / 2
        const dx = (clientX - cx) / (cardRect.width / 2)
        const dy = (clientY - cy) / (cardRect.height / 2)
        card.style.transform = `perspective(1200px) rotateY(${dx * 4}deg) rotateX(${-dy * 3}deg)`
      }
    }

    const resetCard = () => {
      if (card) card.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)"
    }

    hero.addEventListener("mousemove", handleMove)
    hero.addEventListener("touchmove", handleMove, { passive: true })
    hero.addEventListener("mouseleave", resetCard)
    hero.addEventListener("touchend", resetCard)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      hero.removeEventListener("mousemove", handleMove)
      hero.removeEventListener("touchmove", handleMove)
      hero.removeEventListener("mouseleave", resetCard)
      hero.removeEventListener("touchend", resetCard)
    }
  }, [])

  return (
    <section className={`hero ${loaded ? "hero--loaded" : ""}`} ref={heroRef}>

      {/* Spotlight */}
      <div className="hero-spotlight" aria-hidden="true" />

      {/* Ambient Orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      {/* Grid texture */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── LEFT CARD ── */}
      <div className="hero-left" ref={cardRef}>
        <div className="card-shimmer" aria-hidden="true" />

        {/* Badge */}
        <div className="freelance-badge">
          <span className="dot" />
          Available for Freelance
        </div>

        <h1 className="hero-title">
  HARIKRISHNAN
</h1>

        {/* Role */}
        <h2 className="hero-role">
          <span className="role-prefix">&lt;</span>
          <TypeAnimation
            sequence={[
              "Full Stack Developer", 2000,
              "React Developer", 2000,
              "Web App Builder", 2000,
              "UI/UX Enthusiast", 2000,
            ]}
            speed={55}
            repeat={Infinity}
          />
          <span className="role-suffix"> /&gt;</span>
        </h2>

        {/* Description */}
        <p className="hero-desc">
          I craft high-performance digital experiences that live at the
          intersection of engineering and design — pixel-perfect,
          blazing fast, unforgettable.
        </p>

        {/* Stats */}
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
            <span className="stat-label">Tech Stack</span>
          </div>
        </div>

        {/* Socials */}
        <div className="hero-social">
          <a href="mailto:nharikrishnan13@gmail.com" className="social-link" title="Email">
            <FaEnvelope />
            <span className="social-tooltip">Email</span>
          </a>
          <a href="https://github.com/harikrishnan2802" className="social-link" title="GitHub">
            <FaGithub />
            <span className="social-tooltip">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/hari-krishnan-928618309" className="social-link" title="LinkedIn">
            <FaLinkedin />
            <span className="social-tooltip">LinkedIn</span>
          </a>
        </div>

        {/* Download CV */}
        <a href={cv} download className="download-btn">
          <FaDownload />
          <span>Download CV</span>
          <div className="btn-shine" />
        </a>
      </div>

      {/* ── RIGHT IMAGE ── */}
      <div className="hero-right">
        <div className="orbit orbit--1" aria-hidden="true" />
        <div className="orbit orbit--2" aria-hidden="true" />

        <div className="hero-image">
          <img src={profile} alt="Ikrisha" loading="eager" />
          <div className="image-overlay" />
        </div>

        <div className="float-tag float-tag--tl">
          <span className="float-dot" /> React
        </div>
        <div className="float-tag float-tag--br">
          <span className="float-dot float-dot--green" /> Open to Work
        </div>
      </div>

    </section>
  )
}

export default Hero