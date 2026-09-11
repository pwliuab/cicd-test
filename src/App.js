import './App.css';

// ============================================================
//  EDIT YOUR INFO HERE
// ============================================================
const profile = {
  name: 'Liu Pak Wai (Paul)',
  title: 'Fullstack Developer | Backend Specialist',
  tagline:
    'High-performing fullstack developer and CityU Computer Science Master’s graduate with a strong foundation in Computer Engineering from HKUST. Specializing in scalable backend architecture, database optimization, and search engine implementation.',
  location: 'Hong Kong',
  email: 'pwliuab@connect.ust.hk',
  github: 'https://github.com/pwliuab',
  linkedin: 'https://www.linkedin.com/',
  leetcode: 'https://leetcode.com/u/DeathNote/',
};

const skills = [
  'JavaScript (ES6+)',
  'Node.js',
  'Java',
  'SQL',
  'Python',
  'PHP',
  'HTML5/CSS3',
  'React.js',
  'Next.js',
  'React Native',
  'Angular',
  'Express.js',
  'Django',
  'MySQL',
  'MongoDB',
  'Redis',
  'Elasticsearch',
  'Docker',
  'Kubernetes',
  'Google Cloud',
  'Git',
  'GitLab',
  'GitHub Copilot',
  'DeepSeek',
];

const education = [
  {
    school: 'City University of Hong Kong (CityU)',
    degree: 'Master of Science in Computer Science',
    period: '09/2022 – 12/2024',
    note: 'With Credit · GPA 3.5 / 4.3',
  },
  {
    school: 'The Hong Kong University of Science and Technology (HKUST)',
    degree: 'Bachelor of Engineering in Computer Engineering',
    period: '09/2018 – 06/2022',
    note: 'Second Class Honours (Upper Division)',
  },
];

const experience = [
  {
    company: '友和 YOHO · Ecommerce',
    role: 'Senior Analyst Programmer',
    period: '05/2026 – 09/2026',
    points: [
      'Engineered complex SQL validation scripts and advanced Excel models to cross-reference transactional data, ensuring accuracy in financial reporting.',
      'Optimized generation of 1,000+ monthly reports using Node.js streaming and bulk-create/fetch techniques over datasets with millions of order records.',
      'Eliminated timeouts and memory overflows by replacing monolithic data fetches with a chunked streaming architecture during peak billing cycles.',
    ],
  },
  {
    company: '友和 YOHO · Ecommerce',
    role: 'Senior Web Developer',
    period: '10/2023 – 05/2026',
    points: [
      'Optimized platform search performance by 100x by migrating the legacy MySQL backend to an Elasticsearch-driven architecture.',
      'Resolved critical N+1 query issues through optimized data fetching strategies, significantly improving API response times.',
      'Conducted a comprehensive database index audit, achieving a 10% reduction in query latency.',
      'Restored system reliability by purging thousands of duplicate records and implementing stricter MySQL validation constraints.',
    ],
  },
  {
    company: '友和 YOHO · Ecommerce',
    role: 'Web Developer',
    period: '09/2022 – 10/2023',
    points: [
      'Eliminated race conditions by implementing Redis-based distributed locking for concurrent processes.',
      'Architected and implemented a dedicated image server, reducing upload latency and improving system throughput.',
      'Audited and optimized frontend performance, increasing page load speeds and Core Web Vitals.',
      'Refactored Sequelize ORM database relationships and streamlined model associations.',
      'Normalized and migrated a 100k-row dataset for improved efficiency and scalability.',
    ],
  },
  {
    company: 'HKUST Path Advisor · The University',
    role: 'Front-end Developer (Part-time)',
    period: '02/2022 – 06/2022',
    points: [
      'Maintained and scaled the existing React.js system used by the university community.',
      'Integrated Node JS backend services and MongoDB database for dynamic content management.',
    ],
  },
  {
    company: 'Aflame Tech Limited · Vendor Company',
    role: 'Software Developer Intern (Part-time)',
    period: '09/2021 – 06/2022',
    points: [
      'Built a cross-platform mobile application from scratch using React Native.',
      'Developed backend services with Node.js and MongoDB for seamless data persistence.',
      'Created an internal administrative dashboard using React Admin to streamline operations.',
    ],
  },
];

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack task management app with authentication, real-time updates, and a clean dashboard.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/your-github',
  },
  {
    title: 'Project Two',
    description:
      'A personal blog engine with Markdown support, SEO optimization, and a serverless backend.',
    stack: ['Next.js', 'Vercel', 'MDX'],
    link: 'https://github.com/your-github',
  },
  {
    title: 'Project Three',
    description:
      'A command-line tool that automates code formatting and linting across monorepos.',
    stack: ['TypeScript', 'Node.js'],
    link: 'https://github.com/your-github',
  },
];

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            {profile.name}
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="avatar">{profile.name.charAt(0)}</div>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-meta">
          <span>📍 {profile.location}</span>
          <span>✉️ {profile.email}</span>
        </div>
        <div className="hero-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>
      </header>

      <main className="main">
        <section id="about" className="section">
          <h2 className="section-title">Self Introduction</h2>
          <div className="card">
            <p>
              I'm a fullstack developer based in Hong Kong, specializing in
              scalable backend architecture, database optimization, and search
              engine implementation. I hold a Master's degree in Computer
              Science from City University of Hong Kong and a Bachelor's degree
              in Computer Engineering from HKUST.
            </p>
            <p>
              At YOHO, I accelerated platform search performance by 100x with an
              Elasticsearch migration, built high-throughput data pipelines that
              process millions of order records using Node.js, and hardened
              concurrent systems with Redis-based distributed locking. I care
              deeply about code quality, performance, and reliability, and I
              enjoy turning complex problems into simple, elegant solutions.
            </p>
            <h3 className="subtitle">Skills</h3>
            <ul className="skills">
              {skills.map((skill) => (
                <li key={skill} className="skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-title">Education Background</h2>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.school + item.degree} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card timeline-card">
                  <div className="item-head">
                    <h3>{item.school}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <p className="item-sub">{item.degree}</p>
                  {item.note && <p className="item-note">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <div key={item.company + item.role} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card timeline-card">
                  <div className="item-head">
                    <h3>{item.role}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <p className="item-sub">{item.company}</p>
                  <ul className="points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Side Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="card project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="skill-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
