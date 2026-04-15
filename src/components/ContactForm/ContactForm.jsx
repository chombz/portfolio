// src/components/ContactForm/ContactForm.jsx
import { useState } from 'react';
import './ContactForm.css';

const services = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Backend Development',
  'Consulting',
  'Full Stack',
];

const terminalLines = [
  { delay: 0,    text: '> Initializing contact protocol...',  color: '#60a5fa' },
  { delay: 900,  text: '> Status: Available for work ✓',      color: '#4ade80' },
  { delay: 1900, text: '> Location: Nairobi, Kenya',           color: '#94a3b8' },
  { delay: 2900, text: '> Stack: React · Laravel · Node.js',   color: '#94a3b8' },
  { delay: 3900, text: '> Open to: Remote & On-site',          color: '#94a3b8' },
  { delay: 4900, text: '> Response time: < 24 hours',          color: '#4ade80' },
  { delay: 5900, text: '> Awaiting your message..._',          color: '#60a5fa' },
];

const TerminalPanel = () => {
  const [visible, setVisible] = useState([]);

  useState(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisible(prev => [...prev, i]), line.delay);
    });
  }, []);

  return (
    <div className="cf-terminal">
      <div className="cf-terminal-bar">
        <span className="cf-dot cf-dot-red" />
        <span className="cf-dot cf-dot-yellow" />
        <span className="cf-dot cf-dot-green" />
        <span className="cf-terminal-name">edwin@portfolio ~ contact</span>
      </div>
      <div className="cf-terminal-body">
        {terminalLines.map((line, i) => (
          <div
            key={i}
            className={`cf-terminal-line${visible.includes(i) ? ' visible' : ''}`}
            style={{ color: line.color }}
          >
            {line.text}
          </div>
        ))}
      </div>
      <div className="cf-terminal-foot">
        <span className="cf-terminal-badge">● Open to opportunities</span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const toggle = s =>
    setSelected(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="cf-section">
      {/* ── Header ── */}
      <div className="cf-head">
        <div className="cf-head-left">
          <p className="cf-eyebrow"><span className="cf-rule" />GET IN TOUCH</p>
          <h2 className="cf-title">LET'S WORK<br />TOGETHER</h2>
        </div>
        <div className="cf-head-right">
          <p className="cf-intro">
            I'm here to help bring your ideas to life. Whether you need a
            website, app, or just want to chat — let's connect and build
            something great together.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="cf-body">
        <div className="cf-left">
          {sent ? (
            <div className="cf-sent">
              <p className="cf-sent-check">✓</p>
              <p className="cf-sent-title">Message sent!</p>
              <p className="cf-sent-sub">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-group">
                  <label className="cf-label">Name <span className="cf-star">*</span></label>
                  <input type="text" name="name" className="cf-input"
                    placeholder="Hello..." value={form.name}
                    onChange={handleChange} required />
                </div>
                <div className="cf-group">
                  <label className="cf-label">Email <span className="cf-star">*</span></label>
                  <input type="email" name="email" className="cf-input"
                    placeholder="Where can I reply" value={form.email}
                    onChange={handleChange} required />
                </div>
              </div>

              <div className="cf-group">
                <label className="cf-label">Message</label>
                <textarea name="message" className="cf-input cf-textarea"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  value={form.message} onChange={handleChange} rows={4} />
              </div>

              <div className="cf-group">
                <label className="cf-label">
                  What do you need? <span className="cf-star">*</span>
                </label>
                <div className="cf-chips">
                  {services.map(s => (
                    <button key={s} type="button"
                      className={`cf-chip${selected.includes(s) ? ' active' : ''}`}
                      onClick={() => toggle(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="cf-submit">Send Me</button>
            </form>
          )}
        </div>

        <div className="cf-right">
          <TerminalPanel />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;