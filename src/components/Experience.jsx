import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Data Engineering — Self-directed',
    company: 'Learning in Public — Remote',
    date: '2025 — Present',
    tasks: [
      'Switched domain from full-stack development into data engineering, building real ETL pipelines from scratch using only Python\'s standard library — no pandas, no SQL — to understand every layer before abstracting it',
      'Built and deployed a Weather ETL Pipeline that pulls live data for 16 cities from the Open-Meteo API, classifies each reading, and appends results as JSON Lines — running automatically every 6 hours on GitHub Actions',
      'Implemented proper logging module (replacing print() with leveled, timestamped file handlers), error handling for network failures, and a CI/CD workflow using GitHub Actions YAML configuration',
      'Debugged 3 real production issues: a module-import side-effect bug fixed with if __name__ == "__main__", a malformed blank-line crash in the file reader, and a 403 permission error on the GitHub Actions git push step',
      'Documented the entire build and debugging process publicly on LinkedIn as part of a learning-in-public series on the full-stack → data engineering transition',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'WebArclight — Remote',
    date: 'October 2025 — January 2026',
    tasks: [
      'Developed enterprise-grade web applications including Loan Origination System (LOS) and Learning Management System (LMS) using React.js and Django framework',
      'Built responsive and reusable UI components with React.js, achieving seamless integration with backend services through RESTful APIs',
      'Designed and implemented RESTful APIs for data handling, user authentication, and complex business logic using Django and Python',
      'Collaborated in agile environment to implement new features, debug issues, and optimize application performance',
      'Maintained clean code practices and utilized Git for version control, ensuring code quality and team collaboration',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'UptoSkills — Remote',
    date: 'July 2025 — September 2025',
    tasks: [
      'Contributed to multiple web development projects utilizing MERN stack technologies to deliver scalable solutions',
      'Developed both frontend and backend components, enhancing user experience and application functionality',
      'Strengthened problem-solving abilities by tackling real-world development challenges and implementing efficient solutions',
      'Worked closely with mentors and cross-functional teams to deliver high-quality, production-ready code',
      'Gained hands-on experience with modern development workflows and professional coding standards',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Web Development Projects',
    date: '2022 — 2025',
    tasks: [
      'Built end-to-end web applications across the full stack — APIs, database schemas, and frontend interfaces using React.js, Node.js, and Django',
      'Worked primarily with MERN stack and Django REST Framework, building and consuming RESTful APIs across multiple projects',
      'Gravitated consistently toward the data layer — query optimization, schema design, understanding how data moves through a system rather than just how it\'s displayed, which ultimately drove the switch to data engineering',
      'Managed version control with Git across team and solo projects, following clean code practices and professional development workflows',
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          Experience
        </div>
        <h2 className="section-title">
          WHERE I'HAVE <span className="accent">BUILT THINGS</span>
        </h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-date">
                <iconify-icon icon="lucide:calendar" />
                {exp.date}
              </div>
              <ul className="timeline-desc">
                {exp.tasks.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}