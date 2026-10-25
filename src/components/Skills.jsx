import useScrollReveal from '../hooks/useScrollReveal';

const skills = [
  {
    icon: 'lucide:code-2',
    name: 'Languages',
    desc: 'C, Java, JavaScript, Python, HTML, CSS — strong foundation across multiple paradigms',
  },
  {
    icon: 'lucide:layout',
    name: 'Frontend',
    desc: 'React.js, Tailwind CSS, Responsive Design — pixel-perfect, accessible UIs',
  },
  {
    icon: 'lucide:server',
    name: 'Backend',
    desc: 'Django, Node.js, RESTful API Development — scalable server-side architecture',
  },
  {
    icon: 'lucide:database',
    name: 'Databases',
    desc: 'MongoDB for NoSQL, MySQL for relational — schema design & query optimization',
  },
  {
    icon: 'lucide:git-branch',
    name: 'Tools & VCS',
    desc: 'Git, GitHub, VS Code, Postman — modern development workflows & testing',
  },
  {
    icon: 'lucide:layers',
    name: 'Core Strengths',
    desc: 'Full-Stack Development, API Integration, Clean Code, Version Control, Agile',
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="section-container">
        <div className="section-label" ref={ref}>
          Skills
        </div>
        <h2 className="section-title">
          MY <span className="accent">TECH STACK</span>
        </h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">
                <iconify-icon icon={s.icon} />
              </div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}