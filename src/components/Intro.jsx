import { useEffect, useState, useRef } from "react"

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState("idle")
  const containerRef = useRef(null)

  useEffect(() => {
    const timeline = [
      [100,  () => setPhase("lines")],
      [900,  () => setPhase("name")],
      [1800, () => setPhase("tagline")],
      [3000, () => setPhase("flash")],
      [3400, () => setPhase("exit")],
      [4000, () => onComplete?.()],
    ]
    const timers = timeline.map(([delay, fn]) => setTimeout(fn, delay))
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  // Combined Mouse and Touch listener for the spotlight effect
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const updateCoordinates = (x, y) => {
      el.style.setProperty("--mx", `${x}px`)
      el.style.setProperty("--my", `${y}px`)
    }

    const onMouseMove = (e) => updateCoordinates(e.clientX, e.clientY)
    const onTouchMove = (e) => {
      if (e.touches[0]) {
        updateCoordinates(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    el.addEventListener("mousemove", onMouseMove)
    el.addEventListener("touchmove", onTouchMove, { passive: true })

    return () => {
      el.removeEventListener("mousemove", onMouseMove)
      el.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  const nameLetters = "HARIKRISHNAN".split("")

  return (
    <div 
      ref={containerRef} 
      className={`intro-root ${phase}`}
      aria-hidden="true" // Decorative intro
    >
      <div className="intro-glow" />

      {/* ── 4-Side Border ── */}
      <div className="intro-border">
        <div className="intro-border-top" />
        <div className="intro-border-bottom" />
        <div className="intro-border-left" />
        <div className="intro-border-right" />
      </div>

      {/* ── Corner Accents ── */}
      <div className="intro-corner tl" />
      <div className="intro-corner tr" />
      <div className="intro-corner bl" />
      <div className="intro-corner br" />

      {/* ── Inner side lines ── */}
      <div className="intro-side-line left" />
      <div className="intro-side-line right" />

      {/* ── Labels ── */}
      <div className="intro-top-label">PORTFOLIO &middot; REVELATION</div>
      <div className="intro-index">IDX · 001</div>
      <div className="intro-year">EST. 2026</div>

      {/* ── Particle dots ── */}
      <div className="intro-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`intro-particle p${i + 1}`} />
        ))}
      </div>

      {/* ── Name ── */}
      <div className="intro-name-wrap">
        <h1 className="intro-name">
          {nameLetters.map((l, i) => (
            <span 
              key={i} 
              className="intro-letter" 
              style={{ "--i": i }} // Crucial for CSS stagger
            >
              {l === " " ? "\u00A0" : l}
            </span>
          ))}
        </h1>
        <div className="intro-name-underline" />
      </div>

      {/* ── Tagline ── */}
      <div className="intro-tagline">
        <span className="intro-tagline-line" />
        <span className="intro-tagline-text">Full Stack Developer</span>
        <span className="intro-tagline-line" />
      </div>

      <div className="intro-flash" />
    </div>
  )
}