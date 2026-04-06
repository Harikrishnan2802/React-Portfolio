import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "../styles/Projects.css"
import Online from "../assets/images/online.png";
import Accident from "../assets/images/accident-powerbi.png";
import Healthcare from "../assets/images/healthcare-powerbi.png";
import In2in from "../assets/images/In2in.png";
import Portfolio from "../assets/images/portfolio.png";
import Healwise from "../assets/images/Healwise.png";
import Handmade from "../assets/images/ecommerce.png"

const projects = [
  {
    title: "Online Examination System",
    desc: "Secure exam platform...",
    tech: ["PHP", "MySQL"],
    image: Online,
    color: "#6366f1",
    live: "https://brainbattle.free.nf/",
    code: "https://github.com/Harikrishnan2802/Online-examination-system",
  },
  {
    title: "HealWise",
    desc: "Health management web app with BMI tracking, first aid guidance, and emergency contacts.",
    tech: ["PHP", "MySQL"],
    image: Healwise,
    color: "#ec4899",
    live: "https://harikrishnan2802.github.io/Not-deployed/",
    code: "#",
  },
  {
    title: "Accident Report Dashboard",
    desc: "Interactive PowerBI dashboard analyzing accident statistics across vehicle categories.",
    tech: ["Power BI"],
    image: Accident,
    color: "#f59e0b",
    live: "https://harikrishnan2802.github.io/Not-deployed/",
    code: "https://github.com/Harikrishnan2802/accident-dashboard-powerbi",
  },
  {
    title: "Healthcare Dashboard",
    desc: "Interactive PowerBI Dashboard to track InPatient and OutPatient details.",
    tech: ["Power BI"],
    image: Healthcare,
    color: "#22c55e",
    live: "https://harikrishnan2802.github.io/Not-deployed/",
    code: "https://github.com/Harikrishnan2802/PowerBI-HealthcareDashboard",
  },
  {
    title: "In2in Immigration Gateway",
    desc: "A web-based system for managing visa applications, candidate verification, and immigration processes in one centralized platform.",
    tech: ["HTML", "CSS", "JS", "PHP", "MYSql"],
    image: In2in,
    color: "#06b6d4",
    live: "https://in2inimmigrationgateway.free.nf/",
    code: "#",
  },
  {
    title: "My Personal Portfolio",
    desc: "A sleek personal portfolio built with React showcasing projects and skills.",
    tech: ["React", "CSS"],
    image: Portfolio,
    color: "#a855f7",
    live: "https://harikrishnan2802.github.io/React-Portfolio/",
    code: "https://github.com/Harikrishnan2802/React-Portfolio",
  },
  {
    title: "E-Commerce for Handmade",
    desc: "Handcrafted products made with care, crafted to tell your story.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    image: Handmade,
    color: "#a855f7",
    live: "https://harikrishnan2802.github.io/Not-deployed/",
    code: "https://github.com/Harikrishnan2802/E-commerce-for-Handmade-Projects",
  },
]

/* ── Single Card ── */
function ProjectCard({ p }) {
  return (
    <div className="project-card">

      {/* Image / visual area */}
      <div
        className="project-visual"
        style={{ "--accent": p.color }}
      >
        {/* background pattern */}
        <div className="project-bg-pattern" />

        {p.image ? (
          <img src={p.image} alt={p.title} className="project-img-full" />
        ) : (
          <span className="project-emoji">{p.emoji}</span>
        )}

        {/* tech badges inside visual */}
        <div className="project-tech-row">
          {p.tech.map((t, i) => (
            <span key={i} className="project-tech-pill">{t}</span>
          ))}
        </div>

        {/* hover overlay */}
        <div className="project-overlay">
          <div className="overlay-inner">
            <a
              href={p.live}
              className="overlay-btn overlay-btn--live"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt size={13} />
              View Project
            </a>
            <a
              href={p.code}
              className="overlay-btn overlay-btn--code"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Text area */}
      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.desc}</p>
      </div>

    </div>
  )
}

function Projects() {
  // Split into two rows — row1 gets 4 items, row2 gets remaining 3
  const half = Math.ceil(projects.length / 2)
  const row1 = projects.slice(0, half)
  const row2 = projects.slice(half)

  return (
    <section className="projects-section" id="projects">

      {/* ── Header ── */}
      <div className="projects-header">
        <div className="projects-header-left">
          <p className="projects-eyebrow">What I've built</p>
          <h2 className="projects-title">Featured Projects</h2>
        </div>

        {/* stat counter */}
        <div className="projects-stats">
          <div className="stat-card">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">4+</span>
            <span className="stat-label">Live Apps</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      {/* ── Row 1 scrolls left ── */}
      <div className="projects-row">
        <div className="projects-track scroll-left">
          {[...row1, ...row1].map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>

      {/* ── Row 2 scrolls right ── */}
      <div className="projects-row">
        <div className="projects-track scroll-right">
          {[...row2, ...row2].map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects