export const projects = [
  {
    num: "01",
    title: "MINI WEATHER ETL PIPELINE",
    desc: "Pulls live weather data for 16 cities from the Open-Meteo API, classifies each reading (Hot / Cold / Normal), and appends records as JSON Lines to a flat file. Runs automatically every 6 hours on GitHub Actions — zero cost, zero manual intervention. Debugged 3 real production bugs: import side effects, malformed data crashes, and a 403 permission error on the git push step.",
    tag: "Data Engineering",
    tags: ["Python", "urllib", "JSON", "ETL", "GitHub Actions", "Logging"],
    badge: "LIVE",
    link: "https://github.com/VibhoreKumar/mini_weather_ETL_pipeline",
  },
  {
    num: "02",
    title: "WEBARCLIGHT 24*7",
    desc: "Dynamic web application built as part of the WebArclight dev team using PHP, JavaScript, and HTML. Developed and optimized frontend components, improving UI responsiveness and overall user experience.",
    tag: "Web Dev",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    badge: "LIVE",
    link: "https://paleturquoise-kudu-295653.hostingersite.com/index.php",
  },
  {
    num: "03",
    title: "LOAN ORIGINATION SYSTEM",
    desc: "Enterprise-grade LOS built during internship at WebArclight. Full-stack application with React.js frontend, Django REST API backend, user authentication, and complex business logic for loan processing workflows.",
    tag: "Full Stack",
    tags: ["React.js", "Django", "Python", "REST API"],
    badge: "INTERNSHIP",
    link: null,
  },
  {
    num: "04",
    title: "AI RESUME BUILDER",
    desc: "Built with a team of 5 under an industry expert using MERN Stack. Features AI-powered content suggestions, dynamic template customization, JWT-based authentication, role-based access control, live preview, and PDF export — achieving 40–60% reduction in resume creation time.",
    tag: "MERN Stack",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "AI", "JWT"],
    badge: "TEAM PROJECT",
    link: null,
  },
];

export const experiences = [
  {
    role: "Data Engineering — Self-directed",
    company: "Learning in Public — Remote",
    date: "2025 — Present",
    tasks: [
      "Switched domain from full-stack development into data engineering, building real ETL pipelines from scratch using only Python's standard library — no pandas, no SQL — to understand every layer before abstracting it",
      "Built and deployed a Weather ETL Pipeline that pulls live data for 16 cities from the Open-Meteo API, classifies each reading, and appends results as JSON Lines — running automatically every 6 hours on GitHub Actions",
      "Implemented proper logging module (replacing print() with leveled, timestamped file handlers), error handling for network failures, and a CI/CD workflow using GitHub Actions YAML configuration",
      'Debugged 3 real production issues: a module-import side-effect bug fixed with if __name__ == "__main__", a malformed blank-line crash in the file reader, and a 403 permission error on the GitHub Actions git push step',
      "Documented the entire build and debugging process publicly on LinkedIn as part of a learning-in-public series on the full-stack → data engineering transition",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "WebArclight — Remote",
    date: "October 2025 — January 2026",
    tasks: [
      "Developed enterprise-grade web applications including Loan Origination System (LOS) and Learning Management System (LMS) using React.js and Django framework",
      "Built responsive and reusable UI components with React.js, achieving seamless integration with backend services through RESTful APIs",
      "Designed and implemented RESTful APIs for data handling, user authentication, and complex business logic using Django and Python",
      "Collaborated in agile environment to implement new features, debug issues, and optimize application performance",
      "Maintained clean code practices and utilized Git for version control, ensuring code quality and team collaboration",
    ],
  },
  {
    role: "Web Development Intern",
    company: "UptoSkills — Remote",
    date: "July 2025 — September 2025",
    tasks: [
      "Contributed to multiple web development projects utilizing MERN stack technologies to deliver scalable solutions",
      "Developed both frontend and backend components, enhancing user experience and application functionality",
      "Strengthened problem-solving abilities by tackling real-world development challenges and implementing efficient solutions",
      "Worked closely with mentors and cross-functional teams to deliver high-quality, production-ready code",
      "Gained hands-on experience with modern development workflows and professional coding standards",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Web Development Projects",
    date: "2022 — 2025",
    tasks: [
      "Built end-to-end web applications across the full stack — APIs, database schemas, and frontend interfaces using React.js, Node.js, and Django",
      "Worked primarily with MERN stack and Django REST Framework, building and consuming RESTful APIs across multiple projects",
      "Gravitated consistently toward the data layer — query optimization, schema design, understanding how data moves through a system rather than just how it's displayed, which ultimately drove the switch to data engineering",
      "Managed version control with Git across team and solo projects, following clean code practices and professional development workflows",
    ],
  },
];
