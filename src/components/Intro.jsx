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

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      el.style.setProperty("--mx", e.clientX + "px")
      el.style.setProperty("--my", e.clientY + "px")
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  const nameLetters = "HARIKRISHNAN".split("")

  return (
    <div ref={containerRef} className={`intro-root ${phase}`}>

      {/* ── Ambient glow behind name ── */}
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

      {/* ── Top centre label ── */}
      <div className="intro-top-label">Harikrishnan &middot; Portfolio</div>

      {/* ── Bottom labels ── */}
      <div className="intro-index">PORTFOLIO · 01</div>
      <div className="intro-year">© 2025</div>

      {/* ── Particle dots ── */}
      <div className="intro-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`intro-particle p${i + 1}`} />
        ))}
      </div>

      {/* ── Name ── */}
      <div className="intro-name-wrap">
        <div className="intro-name">
          {nameLetters.map((l, i) => (
            <span key={i} className="intro-letter">{l}</span>
          ))}
        </div>
        <div className="intro-name-underline" />
      </div>

      {/* ── Tagline ── */}
      <div className="intro-tagline">
        <span className="intro-tagline-line" />
        Full Stack Developer
        <span className="intro-tagline-line" />
      </div>

      {/* ── Flash ── */}
      <div className="intro-flash" />

    </div>
  )
}