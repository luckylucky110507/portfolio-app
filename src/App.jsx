import './App.css'

const profile = {
  name: 'Lucky Kumari',
  role: 'CSE Student & AI/ML Enthusiast',
  tagline: 'Building smart solutions with code and curiosity.',
  bio:
    "Hello! I'm Lucky Kumari, a passionate CSE student with a strong interest in AI/ML and software development. I love exploring new technologies, building projects, and continuously learning to grow my skills. With a focus on practical applications of machine learning and a knack for problem solving, I am eager to contribute to innovative projects and collaborate with like-minded individuals.",
  email: 'kumarilucky01437@gmail.com',
  github: 'https://github.com/luckylucky110507',
  resumeUrl: '/Lucky-Resume.pdf',
}

const skills = [
  'Python',
  'Machine Learning',
  'Java',
  'Data Structures',
  'Algorithms',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'SQL',
  'Arduino',
]

const projects = [
  {
    name: 'Fake News Detection',
    stack: 'Python - NLP - Streamlit',
    description:
      'Detects fake vs real news using TF-IDF and Logistic Regression with a clean Streamlit UI.',
    url: 'https://github.com/luckylucky110507',
  },
  {
    name: 'Chat Application',
    stack: 'Web App',
    description:
      'Real-time messaging experience with a clean chat interface and responsive layout.',
    url: 'https://github.com/luckylucky110507',
  },
  {
    name: 'Document Editor',
    stack: 'Web App',
    description:
      'Rich-text style editor for creating and formatting documents efficiently.',
    url: 'https://github.com/luckylucky110507',
  },
  {
    name: 'OMR Scoring & Evaluation System',
    stack: 'Python - Automation',
    description:
      'Automates evaluation of OMR sheets to speed up scoring and reduce manual errors.',
    url: 'https://github.com/luckylucky110507',
  },
  {
    name: 'Productivity Chrome Extension',
    stack: 'Chrome Extension',
    description:
      'Browser extension to boost focus and productivity with lightweight tooling.',
    url: 'https://github.com/luckylucky110507',
  },
  {
    name: 'Tic Tac Toe Game',
    stack: 'Web App',
    description:
      'Interactive tic-tac-toe game with a clean UI and responsive play.',
    url: 'https://github.com/luckylucky110507',
  },
  {
    name: 'Recommendation System',
    stack: 'Machine Learning',
    description:
      'Builds personalized recommendations using data-driven similarity signals.',
    url: 'https://github.com/luckylucky110507',
  },
]

const research = [
  {
    title:
      'Efficient Detection of Offensive Social Media Comments in Assamese language Using LSTM',
    authors:
      'Komal Kumar, Lucky Kumari, Kritansh Pandey, Dr. Shivani Dubey, Neha Gupta, Vikas Yadav',
    venue: 'IRJCS, Volume 12, Issue 12 (December 2025)',
    doi: 'https://doi.org/10.26562/irjcs.2025.v1212.08',
  },
]

const certifications = [
  {
    title: 'Introduction to AI Concepts',
    issuer: 'Microsoft',
    date: 'September 11, 2025',
    image: '/certifications/microsoft-intro-ai.jpg',
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata - Forage',
    date: 'July 3, 2025',
    image: '/certifications/tata-forage-cybersecurity.jpg',
  },
  {
    title: 'AI Tools Workshop',
    issuer: 'be10x',
    date: 'December 14, 2025',
    image: '/certifications/be10x-ai-tools.jpg',
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte',
    date: 'July 3, 2025',
    image: '/certifications/deloitte-tech-sim.jpg',
  },
  {
    title: "Code4EdTech Hack-A-Thon'25 (Participation)",
    issuer: 'Innomatics Research Labs',
    date: 'September 21-22, 2025',
    image: '/certifications/innomatics-hackathon.jpg',
  },
  {
    title: 'Programming in Java (Elite)',
    issuer: 'NPTEL - IIT Kharagpur',
    date: 'Jul-Oct 2025',
    note: 'Score: 82%',
    image: '/certifications/nptel-java-elite.jpg',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'August 27, 2025',
    image: '/certifications/oracle-ai-foundations.jpg',
  },
  {
    title:
      'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: 'September 29, 2025',
    credentialId: '321958826OCI25GAIOCP',
  },
  {
    title: 'C# Data Structures and Algorithms',
    issuer: 'Infosys Springboard',
    date: 'October 29, 2025',
    note: 'Course completed on August 20, 2025',
    image: '/certifications/infosys-csharp-dsa.jpg',
  },
  {
    title: 'Machine Learning using Python',
    issuer: 'Infosys Springboard',
    date: 'October 29, 2025',
    note: 'Course completed on August 13, 2025',
    image: '/certifications/infosys-ml-python.jpg',
  },
  {
    title: 'Master ChatGPT',
    issuer: 'UniAthena',
    date: 'July 13, 2025',
  },
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <span className="brand">{profile.name}</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#certifications">Certifications</a>
            <a
              className="resume-link"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>AIML Engineer, Software Developer</h1>
            <h2>CSE Student - Tech Enthusiast</h2>
            <p className="lead">
              Building intelligent and scalable software solutions.
            </p>
            <div className="cta-row">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a
                className="btn ghost"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a className="btn ghost" href={profile.github} target="_blank">
                GitHub
              </a>
            </div>
            <div className="stats">
              <div className="stat-card">
                <span className="stat-label">Projects</span>
                <span className="stat-value">{projects.length || 0}</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Focus</span>
                <span className="stat-value">AI/ML</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Languages</span>
                <span className="stat-value">Python - Java</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="glow" />
            <div className="card-content">
              <p className="card-title">Currently Exploring</p>
              <h3>Practical ML Systems</h3>
              <p>
                Classification, NLP, and data-driven insights with clean
                pipelines and thoughtful evaluation.
              </p>
              <div className="pill-row">
                <span>Logistic Regression</span>
                <span>TF-IDF</span>
                <span>Streamlit</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section reveal about">
        <div className="section-title">
          <p>About</p>
          <h2>Hello, I'm Lucky Kumari.</h2>
        </div>
        <p className="section-body">{profile.bio}</p>
        <p className="section-body">
          CSE'27 | AIML Enthusiast | Aspiring Software Developer | Golden Badge
          in Python - HackerRank
        </p>
      </section>

      <section id="skills" className="section reveal skills">
        <div className="section-title">
          <p>Skills</p>
          <h2>Tools and strengths</h2>
        </div>
        <div className="tag-grid">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section reveal projects">
        <div className="section-title">
          <p>Projects</p>
          <h2>Selected work</h2>
        </div>
        <p className="section-body">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
        {projects.length === 0 ? (
          <div className="empty-state">
            <p>
              Project list will be populated from GitHub. Share your profile
              URL to auto-fill this section.
            </p>
          </div>
        ) : (
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-top">
                  <h3>{project.name}</h3>
                  <span>{project.stack}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View Repo
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="research" className="section reveal research">
        <div className="section-title">
          <p>Research</p>
          <h2>Publications & papers</h2>
        </div>
        <div className="research-grid">
          {research.map((paper) => (
            <article key={paper.doi} className="research-card">
              <h3>{paper.title}</h3>
              <p className="research-authors">{paper.authors}</p>
              <p className="research-venue">{paper.venue}</p>
              <a href={paper.doi} target="_blank" rel="noreferrer">
                {paper.doi.replace('https://', '')}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section reveal certifications">
        <div className="section-title">
          <p>Certifications</p>
          <h2>Credentials & achievements</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.title} className="cert-card">
              {cert.image && (
                <img
                  className="cert-image"
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                />
              )}
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-meta">
                <span>{cert.date}</span>
                {cert.credentialId && (
                  <span>Credential ID: {cert.credentialId}</span>
                )}
                {cert.note && <span>{cert.note}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section reveal contact">
        <div className="section-title">
          <p>Contact</p>
          <h2>Let's build something useful.</h2>
        </div>
        <div className="contact-card">
          <div>
            <p className="contact-label">Email</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <p className="contact-label">GitHub</p>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.github.replace('https://', '')}
            </a>
          </div>
          <div>
            <p className="contact-label">Resume</p>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
