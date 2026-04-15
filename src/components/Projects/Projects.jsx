// src/components/Projects/Projects.jsx
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact, SiNodedotjs, SiMongodb, SiVuedotjs, SiExpress,
  SiJavascript, SiPhp, SiLaravel, SiMysql, SiCss, SiHtml5,
  SiChartdotjs, SiSocketdotio, SiTypescript, SiTailwindcss,
  SiPostgresql, SiGithub, SiKotlin, SiAndroidstudio, SiSqlite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techIcons = {
  'React':          { Icon: SiReact,          color: '#61DAFB' },
  'Laravel':        { Icon: SiLaravel,        color: '#FF2D20' },
  'PHP':            { Icon: SiPhp,            color: '#777BB4' },
  'MySQL':          { Icon: SiMysql,          color: '#4479A1' },
  'JavaScript':     { Icon: SiJavascript,     color: '#F7DF1E' },
  'CSS3':           { Icon: SiCss,            color: '#1572B6' },
  'HTML5':          { Icon: SiHtml5,          color: '#E34F26' },
  'Node.js':        { Icon: SiNodedotjs,      color: '#339933' },
  'Tailwind':       { Icon: SiTailwindcss,    color: '#06B6D4' },
  'Java':           { Icon: FaJava,           color: '#E76F00' },
  'Kotlin':         { Icon: SiKotlin,         color: '#7F52FF' },
  'Android Studio': { Icon: SiAndroidstudio,  color: '#3DDC84' },
  'SQLite':         { Icon: SiSqlite,         color: '#3A9AD9' },
  'PayPal API':     { Icon: SiJavascript,     color: '#003087' },
  'TypeScript':     { Icon: SiTypescript,     color: '#3178C6' },
};

const projects = [
  {
    id: '01',
    category: 'FULLSTACK',
    categoryColor: 'blue',
    title: 'Modern Web Portfolio',
    description:
      'My first Laravel + React project. A responsive portfolio with a full user management system — CRUD operations (add, edit, delete users), login and logout functionality. Built to understand how React and Laravel work together end-to-end.',
    technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'CSS3'],
    github: 'YOUR_GITHUB_LINK_HERE',
    live: null,
  },
  {
    id: '02',
    category: 'FULLSTACK',
    categoryColor: 'green',
    title: 'Advanced E-Commerce Website',
    description:
      'Full-stack shopping platform with separate admin and customer portals. Customers browse categories, add items to cart, and checkout. Admins manage the full catalogue. Features PayPal integration, order confirmation, and full PHPMyAdmin/MySQL backend.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'YOUR_GITHUB_LINK_HERE',
    live: null,
  },
  {
    id: '03',
    category: 'FRONTEND',
    categoryColor: 'purple',
    title: 'NGO Client Website',
    description:
      'Frontend website built for a non-profit organisation client. Features a homepage showcasing the organisation\'s vision and mission, an About page, a media page with social links, YouTube interviews, and newspaper clippings, plus a contact page.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    github: 'YOUR_GITHUB_LINK_HERE',
    live: 'YOUR_LIVE_LINK_HERE',
  },
  {
    id: '04',
    category: 'MOBILE',
    categoryColor: 'orange',
    title: 'Jumble Word Game',
    description:
      'Android puzzle game focused on vocabulary enhancement. Players unscramble jumbled words across Easy, Medium, and Hard difficulty modes within a timer. Features a high score system backed by SQLite, user accounts, and in-game instructions.',
    technologies: ['Java', 'Kotlin', 'Android Studio', 'SQLite'],
    github: 'YOUR_GITHUB_LINK_HERE',
    live: null,
  },
  {
    id: '05',
    category: 'FRONTEND',
    categoryColor: 'red',
    title: 'Maru Daifuku',
    description:
      'My very first e-commerce website — built entirely with HTML and CSS, designed and crafted in Adobe Dreamweaver. A Japanese-inspired sweet shop display site that started it all. No frameworks, no libraries, just pure markup and style.',
    technologies: ['HTML5', 'CSS3'],
    github: 'YOUR_GITHUB_LINK_HERE',
    live: null,
  },
  {
    id: '06',
    category: 'META',
    categoryColor: 'teal',
    title: 'Personal Portfolio v2',
    description:
      'You\'re looking at a project... about a portfolio... while browsing a portfolio. Yes, this site is itself one of the projects. A single-page React app with typing animation, real tech icons, smooth scroll, and an existential crisis baked right in.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    github: 'YOUR_GITHUB_LINK_HERE',
    live: 'YOUR_LIVE_LINK_HERE',
  },
];

const TechTag = ({ name }) => {
  const tech = techIcons[name];
  if (!tech) return <span className="tech-tag">{name}</span>;
  const { Icon, color } = tech;
  return (
    <span className="tech-tag">
      <Icon style={{ color, width: 13, height: 13, flexShrink: 0 }} />
      {name}
    </span>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <p className="projects-eyebrow">// PROJECTS</p>
          <h2 className="section-title">Things I've built.</h2>
          <p className="projects-subtitle">
            Real projects, real problems — from idea to deployment.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-top">
                <div className="card-meta">
                  <span className="project-number">{project.id}</span>
                  <span className={`project-badge badge-${project.categoryColor}`}>
                    {project.category}
                  </span>
                </div>
                <div className="card-actions">
                  {project.live && project.live !== 'YOUR_LIVE_LINK_HERE' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="card-icon-link" title="Live site">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github !== 'YOUR_GITHUB_LINK_HERE' && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="card-icon-link" title="GitHub">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats & GitHub Section */}
        <div className="github-section">

          {/* By the numbers */}
          <div className="stats-bar">
            <div className="stats-bar-item">
              <span className="stats-bar-num">6</span>
              <span className="stats-bar-label">Projects Built</span>
            </div>
            <div className="stats-bar-divider" />
            <div className="stats-bar-item">
              <span className="stats-bar-num">10+</span>
              <span className="stats-bar-label">Languages Used</span>
            </div>
            <div className="stats-bar-divider" />
            <div className="stats-bar-item">
              <span className="stats-bar-num">4</span>
              <span className="stats-bar-label">Years Learning</span>
            </div>
            <div className="stats-bar-divider" />
            <div className="stats-bar-item">
              <span className="stats-bar-num">∞</span>
              <span className="stats-bar-label">Still Curious</span>
            </div>
          </div>

          {/* GitHub link bar */}
          <div className="github-topbar">
            <div className="github-topbar-left">
              <SiGithub className="github-strip-icon" />
              <div>
                <a
                  href="https://github.com/chombz"
                  target="_blank"
                  rel="noreferrer"
                  className="github-handle-link"
                >
                  github.com/chombz ↗
                </a>
                <p className="github-strip-tagline">Where the code lives</p>
              </div>
            </div>
            <a
              href="https://github.com/chombz"
              target="_blank"
              rel="noreferrer"
              className="github-strip-btn"
            >
              View GitHub ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;