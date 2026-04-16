// src/components/ContactForm/ContactForm.jsx
import { useState } from 'react';
import Lottie from 'lottie-react';
import availableAnim from '../../assets/available-for-work.json';
import './ContactForm.css';

const services = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Backend Development',
  'Consulting',
  'Full Stack',
];

const ContactForm = () =>
{
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

        {/* ── Form ── */}
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

        {/* ── Right panel: Lottie + info cards ── */}
        <div className="cf-right">

          {/* Lottie animation — loops automatically */}
          <div className="cf-lottie-wrap">
            <Lottie
              animationData={availableAnim}
              loop={true}
              autoplay={true}
              className="cf-lottie"
            />
          </div>

          {/* Info cards below the animation */}
          <div className="cf-info-cards">
            <div className="cf-info-card">
              <span className="cf-info-dot green" />
              <div>
                <span className="cf-info-title">Available for work</span>
                <span className="cf-info-sub">Remote &amp; On-site · Nairobi, Kenya</span>
              </div>
            </div>
            <div className="cf-info-card">
              <span className="cf-info-dot blue" />
              <div>
                <span className="cf-info-title">Response time</span>
                <span className="cf-info-sub">Usually within 24 hours</span>
              </div>
            </div>
            <div className="cf-info-card">
              <span className="cf-info-dot amber" />
              <div>
                <span className="cf-info-title">Stack</span>
                <span className="cf-info-sub">React · Laravel · Node.js · Kotlin</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;