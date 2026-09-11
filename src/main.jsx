import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB = "https://github.com/Olena3K";
const LINKEDIN = "https://www.linkedin.com/in/olena-kukhar-144a96333/";

const projects = [
  {
    number: "01",
    title: "Crypto Price Monitoring",
    type: "Data Engineering",
    description:
      "An automated dashboard that collects cryptocurrency market data, stores snapshots as JSON, and refreshes the pipeline with Apache Airflow.",
    stack: ["Python", "Airflow", "CoinGecko API", "JSON", "Chart.js"],
    github: "https://github.com/Olena3K/crypto_dashboard",
  },
  {
    number: "02",
    title: "Smart Job Alerts Bot",
    type: "Backend / Cloud",
    description:
      "A Telegram bot that searches job listings, processes external web data, and runs continuously on an AWS EC2 instance.",
    stack: ["Python", "aiogram", "BeautifulSoup", "AWS EC2", "Linux"],
    github: "https://github.com/Olena3K/JobSearchBot",
    demo: "https://t.me/SmartJobAlertsBot",
  },
];

const skills = [
  { label: "Python", group: "Programming", level: "Advanced" },
  { label: "SQL", group: "Data", level: "Strong" },
  { label: "JavaScript", group: "Programming", level: "Intermediate" },
  { label: "PostgreSQL", group: "Databases", level: "Strong" },
  { label: "Pandas", group: "Data", level: "Working" },
  { label: "REST APIs", group: "Backend", level: "Working" },
  { label: "Django / DRF", group: "Backend", level: "Working" },
  { label: "Docker", group: "Cloud", level: "Working" },
  { label: "AWS", group: "Cloud", level: "Working" },
  { label: "Terraform", group: "Infrastructure", level: "Working" },
  { label: "GitHub Actions", group: "DevOps", level: "Working" },
  { label: "Git / GitHub", group: "Tools", level: "Strong" },
];

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">OK</span>
          <span>Olena Kukhar</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a
          className="nav-cta"
          href={`${GITHUB}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Open to all opportunities
            </div>
            <h1>
              Python
              <span className="gradient-text"> • Data • Cloud</span>
            </h1>
            <p className="hero-lead">
              I build practical software and data solutions with Python, SQL,
              APIs, cloud infrastructure, and automation.
            </p>
            <p className="hero-note">
              Currently focused on roles in Python development, data
              engineering, backend systems, and cloud.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <Arrow />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span>Based in Ukraine</span>
              <span className="meta-line" />
              <span>Python · SQL · AWS</span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Code and technology illustration"
          >
            <div className="orb orb-large" />
            <div className="code-card">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>portfolio.py</small>
              </div>
              <div className="code-body">
                <div>
                  <i>01</i>
                  <span>
                    <b>class</b> Developer:
                  </span>
                </div>
                <div>
                  <i>02</i>
                  <span>
                    &nbsp;&nbsp;focus = [<em>"data"</em>,
                  </span>
                </div>
                <div>
                  <i>03</i>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<em>"backend"</em>, <em>"cloud"</em>
                    ]
                  </span>
                </div>
                <div>
                  <i>04</i>
                  <span>&nbsp;</span>
                </div>
                <div>
                  <i>05</i>
                  <span>
                    &nbsp;&nbsp;<b>def</b> build(self):
                  </span>
                </div>
                <div>
                  <i>06</i>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<b>return</b>{" "}
                    <em>"useful things"</em>
                  </span>
                </div>
              </div>
              <div className="code-footer">
                <span>● systems online</span>
                <span>v1.0</span>
              </div>
            </div>

            <div className="floating-card floating-top">
              <strong>Python</strong>
              <span>Data & backend</span>
            </div>
            <div className="floating-card floating-bottom">
              <strong>AWS</strong>
              <span>Cloud & infrastructure</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>About me</h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="large-copy">
                Python-focused data and software professional with 1+ year of
                experience in AI data operations.
              </p>
            </div>
            <div className="about-text">
              <p>
                My current work involves large annotated datasets, data
                validation, quality assurance, and preparation of training data
                for computer vision tasks.
              </p>
              <p>
                Alongside this experience, I build Python applications that
                collect, process, validate, and visualize data from external
                APIs. I enjoy turning messy inputs into reliable workflows and
                useful tools.
              </p>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat">
              <strong>1+</strong>
              <span>year in AI data operations</span>
            </div>
            <div className="stat">
              <strong>Python</strong>
              <span>primary programming focus</span>
            </div>
            <div className="stat">
              <strong>Cloud</strong>
              <span>AWS + infrastructure projects</span>
            </div>
            <div className="stat">
              <strong>Data</strong>
              <span>processing & engineering interest</span>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2>Experience</h2>
          </div>

          <article className="experience-card">
            <div className="experience-date">Aug 2025 — Present</div>
            <div className="experience-main">
              <div className="role-line">
                <h3>AI Data Operations Specialist</h3>
                <span className="pill">Current</span>
              </div>
              <p className="company-note">
                AI / Machine Learning Data Operations
              </p>
              <ul>
                <li>
                  Perform dataset validation and quality assurance across large
                  annotated datasets.
                </li>
                <li>
                  Review data against defined quality, consistency, and
                  annotation requirements.
                </li>
                <li>
                  Contribute to preparation and processing of training datasets
                  for computer vision tasks.
                </li>
                <li>
                  Work with structured data formats, including JSON, during data
                  preparation and validation.
                </li>
                <li>
                  Identify data inconsistencies and support their resolution
                  within dataset workflows.
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2>Technical skills</h2>
          </div>
          <p className="section-intro">
            A practical stack built around Python, data processing, backend
            development, and cloud infrastructure.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.label}>
                <div className="skill-top">
                  <span className="skill-group">{skill.group}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <h3>{skill.label}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-number">04</span>
              <h2>Selected projects</h2>
            </div>
            <a
              className="text-link"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              All repositories <Arrow />
            </a>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <Arrow />
                  </a>

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Try bot <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <span className="section-number">05</span>
              <h2>Let’s build something useful.</h2>
              <p>
                I’m looking for a junior opportunity where I can grow as a
                Python, data, backend, or cloud-focused developer.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:olenakukhar3@gmail.com"
              >
                Email me <Arrow />
              </a>
              <div className="social-links">
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Olena Kukhar</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
