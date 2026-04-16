// src/components/Contact/Contact.jsx
import { useState, useEffect } from 'react';
import './Contact.css';
import
{
  SiGithub, SiX, SiInstagram,
  SiReact, SiNodedotjs, SiLaravel, SiPhp, SiMysql,
  SiJavascript, SiTypescript, SiKotlin,
  SiTailwindcss, SiAngular, SiVuedotjs, SiGit, SiPostgresql,
  SiMongodb, SiVercel,
} from 'react-icons/si';
import { FaLinkedin, FaEnvelope, FaFileAlt, FaJava } from 'react-icons/fa';

const projects = [
  { title: 'Modern Web Portfolio', desc: 'React + Laravel CRUD & auth system' },
  { title: 'Advanced E-Commerce', desc: 'Full-stack shop with PayPal integration' },
  { title: 'NGO Client Website', desc: 'React frontend for non-profit org' },
  { title: 'Jumble Word Game', desc: 'Android puzzle game with SQLite backend' },
  { title: 'Maru Dry Fruits', desc: 'First e-commerce site, built in Dreamweaver' },
  { title: 'Portfolio v2', desc: 'This site — React, custom CSS, dark design' },
];

const col1 = [
  { Icon: SiReact, color: '#61DAFB', label: 'React' },
  { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
  { Icon: SiJavascript, color: '#F7DF1E', label: 'JS' },
  { Icon: SiLaravel, color: '#FF2D20', label: 'Laravel' },
  { Icon: SiTypescript, color: '#3178C6', label: 'TS' },
  { Icon: SiReact, color: '#61DAFB', label: 'React' },
  { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
];
const col2 = [
  { Icon: SiPhp, color: '#777BB4', label: 'PHP' },
  { Icon: SiMysql, color: '#4479A1', label: 'MySQL' },
  { Icon: SiKotlin, color: '#7F52FF', label: 'Kotlin' },
  { Icon: FaJava, color: '#E76F00', label: 'Java' },
  { Icon: SiAngular, color: '#DD0031', label: 'Angular' },
  { Icon: SiPhp, color: '#777BB4', label: 'PHP' },
  { Icon: SiMysql, color: '#4479A1', label: 'MySQL' },
];
const col3 = [
  { Icon: SiGit, color: '#F05032', label: 'Git' },
  { Icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
  { Icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
  { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' },
  { Icon: SiVuedotjs, color: '#4FC08D', label: 'Vue.js' },
  { Icon: SiVercel, color: '#aaaaaa', label: 'Vercel' },
  { Icon: SiGit, color: '#F05032', label: 'Git' },
];

const IconColumn = ({ icons, dir }) => (
  <div className={`li-col-track ${dir}`}>
    {[...icons, ...icons].map((item, i) => (
      <div key={i} className="li-col-item">
        <item.Icon style={{ color: item.color, width: 20, height: 20 }} />
        <span className="li-col-label">{item.label}</span>
      </div>
    ))}
  </div>
);

const LiveClock = () =>
{
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() =>
  {
    const tick = () =>
    {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDate(now.toLocaleDateString('en-GB', { timeZone: 'Africa/Nairobi', weekday: 'short', day: 'numeric', month: 'short' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bento-card bento-clock">
      <div className="clock-inner">
        <span className="clock-label">// NAIROBI</span>
        <span className="clock-time">{time}</span>
        <span className="clock-date">{date}</span>
      </div>
    </div>
  );
};

const Contact = () => (
  <section id="contacts" className="contact-section">
    <div className="container">

      {/*
        ONE unified grid — 3 cols × 5 rows
        col1: CONTACT(r1) | CV(r2-4) | Clock(r5)
        col2: Email(r1)   | GitHub(r2-3) | GIF(r4) | Name(r5)
        col3: LinkedIn(r1-3) | Instagram(r4) | X(r5)
      */}
      <div className="main-grid">

        {/* ── CONTACT label — col1 row1 ── */}
        <div className="contact-label-cell">
          <span className="contact-label">CONTACT</span>
        </div>

        {/* ── Email — col2 row1 ── */}
        <a href="mailto:edwinchombz@gmail.com"
          className="bento-card bento-email"
          target="_blank" rel="noreferrer">
          <FaEnvelope className="email-icon" />
          <span className="email-handle">edwinchombz@gmail.com</span>
        </a>

        {/* ── CV — col1, rows 2-4 ── */}
        <a href="/Edwin_Chomba_CV_Software_Engineer_2026.pdf" className="bento-card bento-cv" target="_blank" rel="noreferrer">
          <div className="cv-anim-bg" aria-hidden="true">
            {[...Array(9)].map((_, i) => <div key={i} className={`cv-line cv-line-${i + 1}`} />)}
            <div className="cv-doc-icon"><FaFileAlt /></div>
          </div>
          <div className="cv-fg">
            <span className="cv-eyebrow">// OPEN DOCUMENT</span>
            <h3 className="cv-title">Curriculum<br />Vitae</h3>
            <span className="cv-cta">Open PDF ↗</span>
          </div>
        </a>

        {/* ── GitHub — col2, rows 2-3 ── */}
        <a href="https://github.com/chombz"
          className="bento-card bento-github"
          target="_blank" rel="noreferrer">
          <div className="gh-header">
            <SiGithub className="gh-logo" />
            <span className="gh-username">github/chombz</span>
          </div>
          <div className="gh-cards">
            <div className="gh-card-row">
              <div className="gh-card-track track-left">
                {[...projects, ...projects].map((p, i) => (
                  <div key={i} className="gh-project-card">
                    <span className="gh-proj-title">{p.title}</span>
                    <span className="gh-proj-desc">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gh-card-row">
              <div className="gh-card-track track-right">
                {[...[...projects].reverse(), ...[...projects].reverse()].map((p, i) => (
                  <div key={i} className="gh-project-card">
                    <span className="gh-proj-title">{p.title}</span>
                    <span className="gh-proj-desc">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className="action-btn">Follow</span>
        </a>

        {/* ── LinkedIn — col3, rows 1-3 (starts at top, same as CONTACT) ── */}
        <a href="https://www.linkedin.com/in/edwin-c-135921159/"
          className="bento-card bento-linkedin"
          target="_blank" rel="noreferrer">
          <div className="li-bg-icons" aria-hidden="true">
            <div className="li-col-wrap"><IconColumn icons={col1} dir="col-up" /></div>
            <div className="li-col-wrap"><IconColumn icons={col2} dir="col-down" /></div>
            <div className="li-col-wrap"><IconColumn icons={col3} dir="col-up" /></div>
          </div>
          <div className="li-foreground">
            <div className="li-top">
              <FaLinkedin className="li-logo" />
              <div>
                <span className="li-name">Edwin C.</span>
                <span className="li-sub">Software Developer</span>
              </div>
            </div>
            <span className="action-btn li-btn">Connect</span>
          </div>
        </a>

        {/* ── GIF — col2, row 4 (under GitHub) ── */}
        {/*
          YOUR GIF:
          Option A – local file: drop into /public → src="/your-file.gif"
          Option B – Giphy URL: copy the media .gif link → paste as src
        */}
        <div className="bento-card bento-gif">
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="gif"
            className="gif-img"
          />
        </div>

        {/* ── Instagram — col3, row 4 ── */}
        <a href="https://www.instagram.com/chombzzz/"
          className="bento-card bento-instagram"
          target="_blank" rel="noreferrer">
          <SiInstagram className="ig-icon" />
          <div>
            <span className="ig-name">@chombzzz</span>
            <span className="ig-sub">Instagram</span>
          </div>
        </a>

        {/* ── Clock — col1, row 5 ── */}
        <LiveClock />

        {/* ── Name — col2, row 5 ── */}
        <div className="bento-card bento-namecard">
          <span className="name-dark">EDWIN</span>
          <span className="name-gold"> CHOMBA</span>
        </div>

        {/* ── X — col3, row 5 ── */}
        <a href="https://x.com/edwinchomba"
          className="bento-card bento-x"
          target="_blank" rel="noreferrer">
          <SiX className="x-logo" />
          <div>
            <span className="x-name">Edwin Chomba</span>
            <span className="x-handle">x.com/edwinchomba</span>
          </div>
        </a>

      </div>
    </div>
  </section>
);

export default Contact;