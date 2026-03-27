import { useEffect } from "react";
import "../styles/Academic.css";

function AcademicTimeline() {

  const education = [
    {
      year: "2026",
      type: "Post Graduate",
      title: "MCA (Master of Computer Applications)",
      college: "Sri Manakula Vinayagar Engineering College",
      grade: "CGPA: 9.3",
      tags: ["Java", "React", "DBMS", "Cloud Computing"],
    },
    {
      year: "2024",
      type: "Under Graduate",
      title: "BCA (Bachelor of Computer Applications)",
      college: "Perunthalaivar Kamarajar Arts College",
      grade: "CGPA: 7.23",
      tags: ["C", "Python", "Web Design", "Data Structures"],
    },
    {
      year: "2021",
      type: "Higher Secondary",
      title: "Higher Secondary Certificate",
      college: "V.O.C Higher Secondary School",
      grade: "79%",
      tags: [],
    },
    {
      year: "2019",
      type: "Secondary",
      title: "SSLC",
      college: "Sekkizhar Government High School",
      grade: "73%",
      tags: [],
    },
  ];

  /* Scroll-reveal */
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section className="timeline-section" id="academicTimeline">

      <h2 className="timeline-title">Academic Journey</h2>

      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              {/* Header row */}
              <div className="timeline-header">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-type">{item.type}</span>
              </div>

              {/* Titles */}
              <h3>{item.title}</h3>

              {/* College */}
              <p className="timeline-college">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                {item.college}
              </p>

              <div className="timeline-divider"></div>

              {/* Footer */}
              <div className="timeline-footer">
                <span className="timeline-grade">⭐ {item.grade}</span>
                {item.tags.length > 0 && (
                  <div className="timeline-tags">
                    {item.tags.map((tag, i) => (
                      <span className="timeline-tag" key={i}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default AcademicTimeline;