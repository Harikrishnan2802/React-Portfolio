import React, { useEffect, useRef, useState } from "react";
import "../styles/Experience.css";

const experiences = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Viyashra Group of Companies",
    duration: "January 2026 – June 2026",
    type: "Internship",
    location: "On-site",
    description:
      "Worked as a Web Development Intern contributing to real-world projects involving front-end and back-end development. Collaborated with the development team to build responsive interfaces and implement features.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    icon: "💻",
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section" ref={sectionRef} id="experience">
      {/* Background grid */}
      <div className="exp-grid-bg" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="exp-grid-dot" />
        ))}
      </div>

      <div className={`exp-container ${visible ? "exp-visible" : ""}`}>
        {/* Header */}
        <div className="exp-header">
          <span className="exp-eyebrow">Career Timeline</span>
          <h1 className="exp-title">
            Experience<span className="exp-accent">.</span>
          </h1>
          <p className="exp-subtitle">
            Where ideas became interfaces.
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          <div className="exp-timeline-line" />

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="exp-card-wrapper"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Node on the line */}
              <div className="exp-node">
                <div className="exp-node-ring" />
                <div className="exp-node-dot" />
              </div>

              {/* Card */}
              <article className="exp-card">
                <header className="exp-card-header">
                  <div className="exp-icon">{exp.icon}</div>
                  <div className="exp-card-meta">
                    <span className="exp-badge">{exp.type}</span>
                    <span className="exp-location-badge">{exp.location}</span>
                  </div>
                </header>

                <div className="exp-card-body">
                  <h2 className="exp-role">{exp.role}</h2>
                  <h3 className="exp-company">{exp.company}</h3>
                  <p className="exp-duration">
                    <span className="exp-clock">⏱</span> {exp.duration}
                  </p>
                  <p className="exp-desc">{exp.description}</p>

                  <div className="exp-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="exp-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="exp-card-glow" aria-hidden="true" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}