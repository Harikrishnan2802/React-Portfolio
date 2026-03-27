import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../styles/Contact.css";
import HandImg from "../assets/images/hand.avif";

function Contact() {
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  /* 1. Live clock — Indian Standard Time */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* 2. Lock body scroll when modal is open */
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [showModal]);

  /* 3. Handle Input Changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* 4. Close Modal Logic */
  const closeModal = () => {
    if (!sending) {
      setShowModal(false);
      setSubmitted(false);
    }
  };

  /* 5. Submit Logic */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xqeykjbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Portfolio Message",
        }),
      });

      if (response.ok) {
        setSending(false);
        setSubmitted(true);

        // Success auto-close
        setTimeout(() => {
          setShowModal(false);
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 2500);
      } else {
        setSending(false);
        const data = await response.json();
        alert(data?.errors?.[0]?.message || "Failed to send message.");
      }
    } catch (error) {
      setSending(false);
      alert("Something went wrong. Please check your connection.");
    }
  };

  return (
    <div className="scroll-container">
      {/* ═══════════════════════════════════
          CONTACT MODAL
      ═══════════════════════════════════ */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-box ${submitted ? "modal-box--success" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ✕
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="success-icon">✓</div>
                <h2>Message Sent!</h2>
                <p>Thanks for reaching out, I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-eyebrow">SEND A MESSAGE</span>
                  <h2 className="modal-title">
                    Let's Talk<span className="modal-dot">.</span>
                  </h2>
                  <p className="modal-subtitle">
                    Fill in the details below and I'll respond within 24 hours.
                  </p>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="modal-field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="modal-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="modal-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hey Hari, I'd love to collaborate on..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`modal-submit ${sending ? "modal-submit--loading" : ""}`}
                    disabled={sending}
                  >
                    {sending ? <span className="spinner" /> : <>SEND MESSAGE ↗</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════ */}
      <div className="main-content-layer">
        <section className="contact-page" id="contact">
          <div className="status-indicator">
            <div className="status-item">
              <span className="dot" />
              <div className="status-text">
                <p className="status-title">Available for projects</p>
                <small className="status-sub">OPEN TO WORK</small>
              </div>
            </div>

            <div className="status-item time-item">
              <p className="time-value">{time}</p>
              <small className="time-zone">IST (GMT+5:30)</small>
            </div>

            <a href="mailto:harikrishnan2802@gmail.com" className="lets-talk-btn">
              LET'S TALK
            </a>
          </div>

          <div className="contact-hero">
            <h1 className="main-heading">
              LET'S<br />WORK<br />TOGETHER
            </h1>

            <div className="spotlight-container">
              <img src={HandImg} alt="Developer at work" className="spotlight-image" />
              <div className="spotlight-badge">
                <span className="badge-dot" />
                Full Stack Developer
              </div>
            </div>

            <div className="hero-cta">
              <p>
                Have a project in mind?<br />
                I'm open to freelance, collaborations<br />
                and full-time opportunities.
              </p>

              <button className="get-in-touch-btn" onClick={() => setShowModal(true)}>
                GET IN TOUCH ↗
              </button>

              <div className="hero-socials">
                <a href="https://github.com/Harikrishnan2802" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/hari-krishnan-928618309" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/hari_krishnan98/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="marquee-strip">
            <div className="marquee-track">
              {Array(6).fill(null).map((_, i) => (
                <span key={i}>REACT &nbsp;·&nbsp; PHP &nbsp;·&nbsp; MYSQL &nbsp;·&nbsp; POWER BI &nbsp;·&nbsp; JAVASCRIPT &nbsp;·&nbsp; CSS &nbsp;·&nbsp;</span>
              ))}
            </div>
          </div>

          <footer className="contact-footer">
            <div className="footer-grid">
              <div className="footer-col footer-col--brand">
                <a href="#" className="footer-logo">HARI<span>®</span></a>
                <p className="footer-phone">+91 9894209369</p>
              </div>

              <div className="footer-col">
                <ul className="footer-nav">
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Works</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#academicTimeline">Education</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <ul className="footer-nav">
                  <li><a href="#" target="_blank" rel="noreferrer">X/Twitter ↗</a></li>
                  <li><a href="https://www.instagram.com/hari_krishnan98/" target="_blank" rel="noreferrer">Instagram ↗</a></li>
                  <li><a href="https://linkedin.com/in/hari-krishnan-928618309" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
                  <li><a href="https://github.com/Harikrishnan2802" target="_blank" rel="noreferrer">GitHub ↗</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-bottom-left">
                <p>@2025 HARI. ALL RIGHTS RESERVED</p>
                <p>Privacy Policy · Terms of Service</p>
              </div>
              <p className="footer-made-by">MADE WITH ❤ IN PONDICHERRY</p>
            </div>
          </footer>
        </section>
      </div>

      <section className="branding-reveal">
        <div className="reveal-grain" />
        <div className="branding-content">
          <p className="reveal-eyebrow">FULL STACK DEVELOPER · PONDICHERRY</p>
          <h1 className="giant-brand-text">HARI<span>®</span></h1>
        </div>
        <div className="reveal-sub-text">
          <p>BEYOND<br />VISUALS<br />BUILT FOR<br />VISION</p>
        </div>
        <div className="reveal-bottom-bar">
          <span>© 2025</span>
          <span>HARIKRISHNAN · PORTFOLIO</span>
          <span>FULL STACK DEV</span>
        </div>
      </section>
    </div>
  );
}

export default Contact;