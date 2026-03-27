import { useEffect, useRef, useState } from "react";
import "../styles/About.css";

/*
  HOW THE SCROLL-LOCK WORKS
  ─────────────────────────
  A tall outer wrapper (.about-scroll-wrapper) is given a large height
  (e.g. 300vh). Inside it, .about is position:sticky top:0 and fills
  100vh, so the section STAYS on screen while you scroll through the
  entire 300vh of the wrapper.

  We read how far we've scrolled inside the wrapper (0 → 1) and use
  that as the highlight progress. Once you've scrolled the full
  wrapper height, the sticky section unsticks and the page moves on.
*/

const para1Tokens = [
  { text: "Hey!", type: "normal" },
  { text: "I'm", type: "normal" },
  { text: "Harikrishnan", type: "name" },
  { text: "—", type: "normal" },
  { text: "a", type: "normal" },
  { text: "passionate", type: "normal" },
  { text: "web", type: "normal" },
  { text: "developer", type: "normal" },
  { text: "who", type: "normal" },
  { text: "enjoys", type: "normal" },
  { text: "creating", type: "normal" },
  { text: "modern", type: "normal" },
  { text: "digital", type: "normal" },
  { text: "experiences", type: "normal" },
  { text: "that", type: "normal" },
  { text: "are", type: "normal" },
  { text: "fast,", type: "normal" },
  { text: "scalable", type: "normal" },
  { text: "and", type: "normal" },
  { text: "visually", type: "normal" },
  { text: "engaging.", type: "normal" },
];

const para2Tokens = [
  { text: "My", type: "normal" },
  { text: "work", type: "normal" },
  { text: "focuses", type: "normal" },
  { text: "on", type: "normal" },
  { text: "building", type: "normal" },
  { text: "full-stack", type: "normal" },
  { text: "web", type: "normal" },
  { text: "applications", type: "normal" },
  { text: "using", type: "normal" },
  { text: "React,", type: "bold" },
  { text: "JavaScript,", type: "bold" },
  { text: "PHP,", type: "bold" },
  { text: "MySQL", type: "bold" },
  { text: "and", type: "normal" },
  { text: "data", type: "normal" },
  { text: "visualization", type: "normal" },
  { text: "tools", type: "normal" },
  { text: "like", type: "normal" },
  { text: "Power", type: "bold" },
  { text: "BI.", type: "bold" },
];

/* ── Word-highlight paragraph ── */
function HighlightText({ tokens, progress }) {
  const total = tokens.length;
  return (
    <p className="about-text highlight-para">
      {tokens.map((token, i) => {
        const lit = progress > i / total;
        let cls = "word";
        if (lit) cls += " lit";
        if (token.type === "name") cls += " word-name";
        if (token.type === "bold") cls += " word-bold";
        return (
          <span key={i} className={cls}>
            {token.text}{" "}
          </span>
        );
      })}
    </p>
  );
}

function About() {
  const wrapperRef = useRef(null); // tall outer wrapper
  const [visible, setVisible]         = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    /* Entrance: trigger .show when wrapper first enters viewport */
    const entranceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    entranceObserver.observe(wrapper);

    /* Scroll progress
       scrollTop of wrapper's top edge relative to document:
         wrapperTop   = wrapper.offsetTop
         scrolled     = window.scrollY - wrapperTop
         scrollable   = wrapper.offsetHeight - window.innerHeight
         progress     = scrolled / scrollable  (0 → 1)
    */
    const onScroll = () => {
      const wrapperTop    = wrapper.offsetTop;
      const scrollable    = wrapper.offsetHeight - window.innerHeight;
      const scrolled      = window.scrollY - wrapperTop;
      const raw           = scrolled / scrollable;
      setScrollProgress(Math.min(Math.max(raw, 0), 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      entranceObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    /* ── Tall wrapper — gives the sticky section room to scroll ── */
    <div className="about-scroll-wrapper" ref={wrapperRef}>

      <section
        id="about"
        className={`about${visible ? " show" : ""}`}
      >
        <div className="about-wrapper">

          {/* LEFT CARD */}
          <div className="about-left">
            <div className={`about-card${visible ? " float-anim" : ""}`}>
              <span className="about-emoji">👨‍💻</span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-right">

            <h2 className="about-title">
              I Build <br />
              Things People <span>Love</span> <br />
              to Use
            </h2>

            {/* para 1 — lights up during first 55% of scroll */}
            <HighlightText
              tokens={para1Tokens}
              progress={Math.min(scrollProgress / 0.55, 1)}
            />

            {/* para 2 — lights up during remaining 45% */}
            <HighlightText
              tokens={para2Tokens}
              progress={Math.max(0, (scrollProgress - 0.55) / 0.45)}
            />

            {/* FEATURES */}
            <div className="about-features">
              <div className="feature">
                <h4>⚡ Performance Focused</h4>
                <p>Optimized applications with fast load time.</p>
              </div>
              <div className="feature">
                <h4>🎯 Clean UI Design</h4>
                <p>Modern interfaces with smooth user experience.</p>
              </div>
              <div className="feature">
                <h4>🚀 Full Stack Development</h4>
                <p>Building scalable web apps from frontend to backend.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;