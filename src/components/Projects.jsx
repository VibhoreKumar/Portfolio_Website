import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    num: '01',
    title: 'MINI WEATHER ETL PIPELINE',
    desc: 'Pulls live weather data for 16 cities from the Open-Meteo API, classifies each reading (Hot / Cold / Normal), and appends records as JSON Lines to a flat file. Runs automatically every 6 hours on GitHub Actions — zero cost, zero manual intervention. Debugged 3 real production bugs: import side effects, malformed data crashes, and a 403 permission error on the git push step.',
    tag: 'Data Engineering',
    tags: ['Python', 'urllib', 'JSON', 'ETL', 'GitHub Actions', 'Logging'],
    badge: 'LIVE',
    link: 'https://github.com/VibhoreKumar/mini_weather_ETL_pipeline',
  },
  {
    num: '02',
    title: 'WEBARCLIGHT 24*7',
    desc: 'Dynamic web application built as part of the WebArclight dev team using PHP, JavaScript, and HTML. Developed and optimized frontend components, improving UI responsiveness and overall user experience.',
    tag: 'Web Dev',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    badge: 'LIVE',
    link: 'https://paleturquoise-kudu-295653.hostingersite.com/index.php',
  },
  {
    num: '03',
    title: 'LOAN ORIGINATION SYSTEM',
    desc: 'Enterprise-grade LOS built during internship at WebArclight. Full-stack application with React.js frontend, Django REST API backend, user authentication, and complex business logic for loan processing workflows.',
    tag: 'Full Stack',
    tags: ['React.js', 'Django', 'Python', 'REST API'],
    badge: 'INTERNSHIP',
    link: null,
  },
  {
    num: '04',
    title: 'AI RESUME BUILDER',
    desc: 'Built with a team of 5 under an industry expert using MERN Stack. Features AI-powered content suggestions, dynamic template customization, JWT-based authentication, role-based access control, live preview, and PDF export — achieving 40–60% reduction in resume creation time.',
    tag: 'MERN Stack',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI', 'JWT'],
    badge: 'TEAM PROJECT',
    link: null,
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          PROJECTS
        </div>
        <h2 className="section-title">
           <span className="accent">THINGS I'VE ACTUALLY BUILT</span>
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-info">

                {/* top row: project number + badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-muted, #666)', letterSpacing: 2 }}>
                    // PROJECT {p.num}
                  </span>
                  <span style={{
                    fontSize: 9,
                    fontFamily: 'var(--font-mono, monospace)',
                    padding: '3px 8px',
                    border: '1px solid',
                    letterSpacing: 2,
                    borderColor: p.badge === 'LIVE' ? 'var(--accent, #f97316)' : 'var(--text-muted, #666)',
                    color: p.badge === 'LIVE' ? 'var(--accent, #f97316)' : 'var(--text-muted, #666)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                    {p.badge === 'LIVE' && (
                      <span style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: 'var(--accent, #f97316)',
                        display: 'inline-block',
                        animation: 'pulse 2s infinite',
                      }} />
                    )}
                    {p.badge}
                  </span>
                </div>

                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>

                <div className="project-tags" style={{ marginBottom: 16 }}>
                  {p.tags.map((t, j) => (
                    <span className="project-tag-small" key={j}>{t}</span>
                  ))}
                </div>

                {/* GitHub link — only shows if project has one */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 11,
                      fontFamily: 'var(--font-mono, monospace)',
                      color: 'var(--text-secondary, #888)',
                      textDecoration: 'none',
                      letterSpacing: 1,
                    }}
                  >
                    <iconify-icon icon="simple-icons:github" style={{ fontSize: 14 }} />
                    View on GitHub
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}