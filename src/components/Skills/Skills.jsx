// src/components/Skills/Skills.jsx
import './Skills.css';

import {
  SiJavascript, SiPhp, SiKotlin, SiHtml5, SiCss,
  SiCplusplus, SiC, SiTypescript,
  SiLaravel, SiReact, SiNodedotjs, SiVuedotjs, SiNextdotjs,
  SiTailwindcss, SiAngular, SiVite, SiDotnet,
  SiMysql, SiMariadb, SiSqlite, SiMongodb, SiPostgresql,
  SiAndroidstudio, SiPhpstorm, SiApachenetbeanside,
  SiLinux, SiUbuntu, SiCentos, SiGit, SiGithub,
  SiVercel, SiPostman,
  SiOpenai, SiAnthropic, SiDeepnote,
  SiOpenapiinitiative,
} from 'react-icons/si';

import { FaJava, FaAws } from 'react-icons/fa';
import { TbBrandVscode, TbBrandVisualStudio } from 'react-icons/tb';

const categories = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java',       Icon: FaJava,         color: '#E76F00' },
      { name: 'C',          Icon: SiC,            color: '#A8B9CC' },
      { name: 'C++',        Icon: SiCplusplus,    color: '#00599C' },
      { name: 'C#',         Icon: SiC,            color: '#9B4F96' },
      { name: 'JavaScript', Icon: SiJavascript,   color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript,   color: '#3178C6' },
      { name: 'PHP',        Icon: SiPhp,          color: '#777BB4' },
      { name: 'Kotlin',     Icon: SiKotlin,       color: '#7F52FF' },
      { name: 'HTML5',      Icon: SiHtml5,        color: '#E34F26' },
      { name: 'CSS3',       Icon: SiCss,          color: '#1572B6' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React',     Icon: SiReact,       color: '#61DAFB' },
      { name: 'Vue.js',    Icon: SiVuedotjs,    color: '#4FC08D' },
      { name: 'Next.js',   Icon: SiNextdotjs,   color: '#aaaaaa' },
      { name: 'Angular',   Icon: SiAngular,     color: '#DD0031' },
      { name: 'Laravel',   Icon: SiLaravel,     color: '#FF2D20' },
      { name: 'Node.js',   Icon: SiNodedotjs,   color: '#339933' },
      { name: '.NET',      Icon: SiDotnet,      color: '#512BD4' },
      { name: 'Tailwind',  Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vite',      Icon: SiVite,        color: '#646CFF' },
    ],
  },
  {
    label: 'Databases & Cloud',
    skills: [
      { name: 'MySQL',      Icon: SiMysql,             color: '#4479A1' },
      { name: 'MariaDB',    Icon: SiMariadb,           color: '#C0765A' },
      { name: 'SQLite',     Icon: SiSqlite,            color: '#3A9AD9' },
      { name: 'MongoDB',    Icon: SiMongodb,           color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql,        color: '#336791' },
      { name: 'AWS',        Icon: FaAws,               color: '#FF9900' },
      { name: 'Vercel',     Icon: SiVercel,            color: '#aaaaaa' },
      { name: 'REST APIs',  Icon: SiOpenapiinitiative, color: '#6BA539' },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'VS Code',        Icon: TbBrandVscode,       color: '#007ACC' },
      { name: 'Visual Studio',  Icon: TbBrandVisualStudio, color: '#5C2D91' },
      { name: 'Android Studio', Icon: SiAndroidstudio,     color: '#3DDC84' },
      { name: 'PHPStorm',       Icon: SiPhpstorm,          color: '#B345F1' },
      { name: 'NetBeans',       Icon: SiApachenetbeanside, color: '#1B6AC6' },
      {name: 'MYSQL Workbench', Icon: SiMysql,              color: '#4479A1' },
      { name: 'Postman',        Icon: SiPostman,           color: '#FF6C37' },
      { name: 'Git',            Icon: SiGit,               color: '#F05032' },
      { name: 'GitHub',         Icon: SiGithub,            color: '#aaaaaa' },
      { name: 'Linux',          Icon: SiLinux,             color: '#FCC624' },
      { name: 'Ubuntu',         Icon: SiUbuntu,            color: '#E95420' },
      { name: 'CentOS',         Icon: SiCentos,            color: '#7B4F9E' },
      { name: 'OpenAI',         Icon: SiOpenai,            color: '#412991' },
      { name: 'Claude',         Icon: SiAnthropic,         color: '#CC9B7A' },
      { name: 'DeepSeek',       Icon: SiDeepnote,          color: '#4D6BFE' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="skills-subtitle">
          From systems programming to web development to cloud — the full picture.
        </p>

        <div className="skills-grid-outer">
          {categories.map((cat) => (
            <div key={cat.label} className="skills-category">
              <span className="category-label">{cat.label}</span>
              <div className="skills-pills">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <skill.Icon
                      className="pill-icon"
                      style={{ color: skill.color }}
                    />
                    <span className="pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;