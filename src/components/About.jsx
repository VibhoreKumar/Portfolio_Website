import useScrollReveal from '../hooks/useScrollReveal';

const details = [
  { label: 'Name',     value: 'Vibhore Kumar' },
  { label: 'Role',     value: 'Full-Stack Dev → Data Engineering' },
  { label: 'Location', value: 'Delhi / Kota, India' },
  { label: 'Degree',   value: 'B.Tech CSE — GD Goenka University (2027)' },
];

const software = [
  { name: 'Python',          icon: 'simple-icons:python' },
  { name: 'GitHub Actions',  icon: 'simple-icons:githubactions' },
  { name: 'React.js',        icon: 'simple-icons:react' },
  { name: 'Node.js',         icon: 'simple-icons:nodedotjs' },
  { name: 'Django',          icon: 'simple-icons:django' },
  { name: 'MongoDB',         icon: 'simple-icons:mongodb' },
  { name: 'MySQL',           icon: 'simple-icons:mysql' },
  { name: 'SQLite',          icon: 'simple-icons:sqlite' },
  { name: 'Tailwind CSS',    icon: 'simple-icons:tailwindcss' },
  { name: 'Git',             icon: 'simple-icons:git' },
  { name: 'VS Code',         icon: 'simple-icons:visualstudiocode' },
  { name: 'Postman',         icon: 'simple-icons:postman' },
];

const achievements = [
  { icon: 'lucide:trophy',  text: 'Solved 100+ DSA problems across GeeksforGeeks & LeetCode' },
  { icon: 'lucide:award',   text: 'JEE Mains Qualifier — among 1.2M+ candidates (2022)' },
  { icon: 'lucide:star',    text: 'JEE Advanced Qualifier — top ~2.5% of JEE Mains candidates (2023)' },
  { icon: 'lucide:medal',   text: 'State Cricketer (U-19) — Represented Kota, Rajasthan (2020)' },
  { icon: 'lucide:rocket',  text: 'Deployed Weather ETL Pipeline on GitHub Actions — runs every 6 hours automatically' },
];

const certifications = [
  'Python Essentials 1 — Foundational Python Programming Certification',
];

const mindset = [
  {
    icon: 'lucide:layers',
    label: 'Philosophy',
    text: 'Understand the layers before using the abstractions. I built my first ETL pipeline with zero libraries — just urllib, json, and dictionaries — because knowing what pandas does under the hood changes how you use it.',
  },
  {
    icon: 'lucide:bug',
    label: 'Approach',
    text: 'Ship, break, debug, document. Every project goes through a real debugging cycle — import bugs, malformed data, permission errors. The failures are the portfolio, not just the working code.',
  },
  {
    icon: 'lucide:compass',
    label: 'Currently',
    text: 'Building automated data pipelines deployed on GitHub Actions. Next: AQI monitoring for Indian cities, Blinkit data analysis, and expanding into SQL + cloud storage for the Load step.',
  },
];

export default function About() {
  const ref = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          About Me
        </div>
        <h2 className="section-title">
          WHO AM <span className="accent">I_</span>
        </h2>

        {/* ---- TWO-COLUMN GRID: bio+details LEFT | stack+achievements+certs RIGHT ---- */}
        <div className="about-grid">

          {/* LEFT: bio + details */}
          <div>
            <div className="about-text" ref={ref2}>
              <p>
                I'm a Computer Science Engineering student at GD Goenka
                University, Delhi. I started as a full-stack developer —
                building APIs, designing schemas, shipping features end to end.
                But I kept gravitating toward the same thing: not the UI, not
                the frontend — it was the data. How it flows, how it's
                structured, how it breaks at scale.
              </p>
              <p>
                So I made the switch official. I'm now focused on
                <strong> Data Engineering</strong> — building ETL pipelines
                from scratch using only Python's standard library. No pandas,
                no SQL shortcuts. My Weather ETL pipeline fetches live data for
                16 cities and runs automatically every 6 hours on GitHub
                Actions, committing fresh data back to the repo.
              </p>
              <p>
                When I'm not building pipelines, you'll find me grinding DSA
                on LeetCode or on the cricket field — I represented Kota at the
                state level in Under-19 cricket.
              </p>
            </div>

            <div className="about-details">
              {details.map((d, i) => (
                <div className="about-detail-item" key={i}>
                  <div className="about-detail-label">{d.label}</div>
                  <div className="about-detail-value">{d.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: tech stack + achievements + certifications */}
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>
              Tech Stack
            </div>
            <div className="software-list">
              {software.map((s, i) => (
                <div className="software-tag" key={i}>
                  <iconify-icon icon={s.icon} />
                  {s.name}
                </div>
              ))}
            </div>

            <div className="section-label" style={{ marginBottom: 20, marginTop: 40 }}>
              Achievements
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {achievements.map((a, i) => (
                <div className="contact-link" key={i} style={{ padding: '12px 16px' }}>
                  <iconify-icon icon={a.icon} style={{ fontSize: 16 }} />
                  <span style={{ fontSize: 11 }}>{a.text}</span>
                </div>
              ))}
            </div>

            <div className="section-label" style={{ marginBottom: 16, marginTop: 32 }}>
              Certifications
            </div>
            <div className="software-list">
              {certifications.map((c, i) => (
                <div className="software-tag" key={i}>
                  <iconify-icon icon="lucide:badge-check" />
                  {c}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ---- MINDSET: full-width 3-column row below the grid ---- */}
        <div className="section-label" style={{ marginBottom: 16, marginTop: 48 }}>
          Mindset
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {mindset.map((m, i) => (
            <div
              className="contact-link"
              key={i}
              style={{
                padding: '18px 20px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <iconify-icon icon={m.icon} style={{ fontSize: 16 }} />
                <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
                  {m.label}
                </span>
              </div>
              <span style={{ fontSize: 11, lineHeight: 1.8, opacity: 0.8 }}>
                {m.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}