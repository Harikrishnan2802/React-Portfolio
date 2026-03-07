function About() {
  return (
    <section id="about" className="about">

      <div className="about-wrapper">

        {/* LEFT CARD */}
        <div className="about-left">
          <div className="about-card">
            <span className="about-emoji">👨‍💻</span>
          </div>
        </div>


        {/* RIGHT CONTENT */}
        <div className="about-right">

          <h2 className="about-title">
            I Build <br/>
            Things People <span>Love</span> <br/>
            to Use
          </h2>

          <p className="about-text">
            Hey! I'm <strong>Harikrishnan</strong> — a passionate web developer
            who enjoys creating modern digital experiences that are fast,
            scalable and visually engaging.
          </p>

          <p className="about-text">
            My work focuses on building full-stack web applications using
            <strong> React, JavaScript, PHP, MySQL</strong> and data
            visualization tools like <strong>Power BI</strong>.
          </p>


          {/* FEATURE CARDS */}

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
  )
}

export default About