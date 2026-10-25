import { useEffect, useRef, useState } from "react";
import Contact from "./components/Contact";
import Atmosphere from "./components/Atmosphere";
import HandScene from "./components/HandScene";
import usePortfolioMotion from "./hooks/usePortfolioMotion";
import { projects, experiences } from "./content";

const linkedin = "https://www.linkedin.com/in/vibhore-kumar-9b9298376";
const photo = "/developer-avatar.svg";
const skills = [
  "Python",
  "SQL",
  "ETL Pipelines",
  "API Integration",
  "React",
  "Django",
  "Node.js",
  "MongoDB",
  "GitHub Actions",
  "Data Engineering",
  "Full-Stack Development",
];
function Star({ className = "" }) {
  return (
    <svg
      className={`chrome-star ${className}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`chrome-${className}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#090909" />
          <stop offset=".42" stopColor="#161616" />
          <stop offset=".48" stopColor="#d4d1db" />
          <stop offset=".55" stopColor="#77717e" />
          <stop offset=".64" stopColor="#9478c5" />
          <stop offset=".7" stopColor="#080808" />
          <stop offset="1" stopColor="#393939" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#chrome-${className})`}
        d="M60 2C69 2 65 33 82 42S118 48 118 60 90 66 79 80 70 118 60 118 53 88 40 79 2 70 2 60 31 52 41 41 50 2 60 2Z"
      />
    </svg>
  );
}
function Portrait({ className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`portrait ${className}`}>
      {failed ? (
        <span className="portrait-fallback" aria-label="Vibhore Kumar">
          VK<span>Vibhore Kumar</span>
        </span>
      ) : (
        <img src={photo} alt="Animated cartoon developer with a beard, baseball cap, and hoodie" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
function ProjectArt({ index }) {
  return (
    <div
      className={`project-art art-${index}`}
      aria-label={`${projects[index].title} — illustrative project preview`}
    >
      <div className="window-bar">
        <span>● ● ●</span>
        <span>
          {
            [
              "weather / pipeline",
              "webarclight / web",
              "loan / workspace",
              "rezoom / builder",
            ][index]
          }
        </span>
        <span>↗</span>
      </div>
      {index === 0 ? (
        <div className="pipeline-art">
          <span className="mini-label">WEATHER DATA, IN MOTION</span>
          <h3>From API to insight.</h3>
          <div className="pipeline-nodes">
            {["01 / EXTRACT", "02 / TRANSFORM", "03 / LOAD"].map((s, i) => (
              <div key={s}>
                <span>{["☁", "⌘", "▤"][i]}</span>
                <b>{s}</b>
                <small>
                  {["Open-Meteo API", "Clean & classify", "JSON Lines"][i]}
                </small>
              </div>
            ))}
          </div>
          <div className="art-bottom">
            <span>
              <i /> Automated workflow
            </span>
            <span>16 cities · Every 6 hours</span>
          </div>
        </div>
      ) : index === 1 ? (
        <div className="web-art">
          <span className="mini-label">WEBARCLIGHT</span>
          <h3>
            Ideas into
            <br />
            digital experiences.
          </h3>
          <div className="art-pill">Design. Develop. Deliver. ↗</div>
          <div className="web-orbit" />
        </div>
      ) : index === 2 ? (
        <div className="loan-art">
          <aside>
            ◈<br />
            <br />
            Overview
            <br />
            Applications
            <br />
            Customers
            <br />
            Reports
          </aside>
          <div>
            <span className="mini-label">LOAN WORKSPACE</span>
            <h3>Every step. Connected.</h3>
            <div className="loan-stats">
              <span>
                Applications<b>Overview</b>
              </span>
              <span>
                Workflow<b>In progress</b>
              </span>
            </div>
            {[
              "Application received",
              "Document verification",
              "Credit review",
            ].map((s, i) => (
              <p key={s}>
                <span>{s}</span>
                <b>{i === 0 ? "Complete" : "Review"}</b>
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="resume-art">
          <div>
            <span className="mini-label">REZOOM / AI RESUME BUILDER</span>
            <h3>
              Your next chapter
              <br />
              starts here.
            </h3>
            <span className="art-pill">A little help from AI. ✧</span>
          </div>
          <div className="resume-paper">
            <b>YOUR NAME</b>
            <small>Developer · Problem solver</small>
            {["PROFILE", "EXPERIENCE", "EDUCATION", "SKILLS"].map((s) => (
              <div key={s}>
                <strong>{s}</strong>
                <i />
                <i />
                <i />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  usePortfolioMotion();
  useEffect(() => {
    if (selected !== null) {
      dialog.current.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="floating-nav">
        <div className="nav-top">
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Say Hello<span className="wave">👋</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navigation"
          >
            {menuOpen ? "×" : "•••"}
          </button>
        </div>
        {menuOpen && (
          <nav id="navigation">
            {["Home", "About", "Projects", "Experience", "Contact"].map((s) => (
              <a
                href={`#${s.toLowerCase()}`}
                key={s}
                onClick={() => setMenuOpen(false)}
              >
                {s}
                <span>↗</span>
              </a>
            ))}
          </nav>
        )}
      </header>
      <div className="quick-links">
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/VibhoreKumar"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a href="/Vibhore_Kumar_Resume.pdf" download="Vibhore_Kumar_Resume.pdf" aria-label="Download Vibhore Kumar's resume as a PDF">
          Resume ↓
        </a>
      </div>
      <main id="main">
        <section className="hero" id="home">
          <div className="silver-light" aria-hidden="true">
            <Atmosphere />
            <div className="silver-fade" />
          </div>
          <div className="hero-heading">
            <Star className="star-one" />
            <h1>
              DATA
              <br />
              ENGINEER
            </h1>
            <Star className="star-two" />
            <p className="hero-role">& FULL-STACK DEVELOPER</p>
          </div>
          <div className="hero-bottom">
            <div>
              <span className="eyebrow">PORTFOLIO / VIBHORE KUMAR</span>
              <h2>Vibhore Kumar</h2>
            </div>
            <div className="hero-caption">
              <span className="availability">
                <i /> Open to opportunities
              </span>
              <span>/ BUILDING WITH PURPOSE</span>
            </div>
          </div>
          <a href="#about" className="scroll-cue">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </section>
        <section id="about" className="about section-shell">
          <div className="about-intro" data-reveal>
            <h2>Hey!</h2>
            <p>
              I'm Vibhore, a developer
              <br />
              focused on building the
              <br />
              <strong>systems behind the experience.</strong>
            </p>
            <span className="eyebrow">DELHI / INDIA</span>
          </div>
          <div className="portrait-reveal" data-reveal>
            <Portrait className="about-portrait" />
          </div>
          <div className="about-copy" data-reveal>
            <p>
              A Computer Science Engineering student at GD Goenka University,
              finding my way from full-stack development into the world of data.
            </p>
            <p>
              I build web applications with React and Django, and automated
              pipelines with Python. Curious about how data moves, how systems
              connect, and how to make them work better.
            </p>
            <a className="black-button" href="#projects">
              ↗ View Projects
            </a>
          </div>
        </section>
        <section className="skills-section section-shell" aria-label="Skills">
          <p className="eyebrow" data-reveal>
            WHAT I WORK WITH
          </p>
          <div className="skills-sentence" data-reveal>
            {skills.map((s, i) => (
              <span className="skill-word" key={s}>
                {s}
                {i < skills.length - 1 && <em> · </em>}
              </span>
            ))}
          </div>
          <HandScene />
          <div className="small-facts" data-reveal>
            <span>
              <b>100+</b> DSA problems solved
            </span>
            <span>
              <b>02</b> Internships
            </span>
            <span>
              <b>04+</b> Projects built
            </span>
          </div>
        </section>
        <section id="projects" className="projects section-shell">
          <div className="section-heading" data-reveal>
            <h2>
              Selected work<span>↘</span>
            </h2>
            <p>
              A few things I've actually built.
              <br />
              From interfaces to data pipelines.
            </p>
          </div>
          {projects.map((p, i) => (
            <article
              className={`project-row ${i % 2 ? "reverse" : ""}`}
              key={p.num}
              data-reveal
            >
              <div className="project-copy">
                <span className="eyebrow">
                  {p.num} / {p.tag}
                </span>
                <h3>
                  {
                    [
                      "Weather ETL Pipeline",
                      "WebArclight 24×7",
                      "Loan Origination System",
                      "AI Resume Builder",
                    ][i]
                  }
                </h3>
                <p>
                  {p.desc.split(". ").slice(0, 2).join(". ")}
                  {p.desc.split(". ").length > 2 ? "." : ""}
                </p>
                <div className="project-tags">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button className="black-button" onClick={() => setSelected(i)}>
                  ↗ View Project
                </button>
              </div>
              <button
                className="project-visual"
                onClick={() => setSelected(i)}
                aria-label={`Explore ${p.title}`}
              >
                <ProjectArt index={i} />
              </button>
            </article>
          ))}
        </section>
        <section id="experience" className="experience section-shell">
          <div className="experience-title" data-reveal>
            <h2>Experience</h2>
            <a href="#projects" className="black-button">
              ↗ View Projects
            </a>
            <Star className="star-four" />
          </div>
          <div className="experience-list">
            {experiences.map((e, i) => (
              <article className="experience-row" key={e.role} data-reveal>
                <div>
                  <h3>{e.company.split(" — ")[0]}</h3>
                  <p>{e.role}</p>
                </div>
                <div>
                  <h4>
                    {
                      [
                        "Automated data, real-world learning",
                        "Building across the full stack",
                        "From learning to shipping",
                        "Where it all started",
                      ][i]
                    }
                  </h4>
                  <p>
                    {
                      [
                        "Python ETL pipelines, scheduled workflows, API integration, logging, and error handling.",
                        "React and Django applications, REST APIs, authentication, and loan processing workflows.",
                        "MERN stack development, reusable components, and collaborative project delivery.",
                        "End-to-end web applications, database schemas, and a growing interest in the data layer.",
                      ][i]
                    }
                  </p>
                </div>
                <time>{e.date}</time>
              </article>
            ))}
          </div>
        </section>
        <div className="contact-wrap">
          <Atmosphere dark />
          <div className="contact-heading section-shell" data-reveal>
            <p>
              Have an idea that needs
              <br />a thoughtful engineer?
            </p>
            <h2>
              Let’s Talk<span>↗</span>
            </h2>
          </div>
          <Contact />
          <div className="footer-name" aria-hidden="true">
            VIBHORE
          </div>
          <footer>
            <span>© {new Date().getFullYear()} Vibhore Kumar</span>
            <span>Built with curiosity. Made to connect.</span>
            <a href="#home">Back to top ↑</a>
          </footer>
        </div>
      </main>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        {selected !== null && (
          <>
            <button
              className="dialog-close"
              onClick={() => setSelected(null)}
              aria-label="Close project"
            >
              ×
            </button>
            <div className="dialog-body">
              <span className="eyebrow">
                PROJECT {projects[selected].num} / {projects[selected].tag}
              </span>
              <h2>{projects[selected].title}</h2>
              <ProjectArt index={selected} />
              <p>{projects[selected].desc}</p>
              <h3>Built with</h3>
              <div className="project-tags">
                {projects[selected].tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {projects[selected].link ? (
                <a
                  className="black-button"
                  href={projects[selected].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selected === 1 ? "Visit Website" : "View on GitHub"} ↗
                </a>
              ) : (
                <a
                  className="black-button"
                  href="#contact"
                  onClick={() => setSelected(null)}
                >
                  Ask me about this project ↗
                </a>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
