import { useState } from 'react';
import Lottie from 'lottie-react';
import availableAnim from '../../assets/available-for-work.json';
import './ContactForm.css';

const ACCESS_KEY = '7dfd45cd-00e2-4d82-b307-a90075795931';

const services = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Backend Development',
  'Consulting',
  'Full Stack',
];

const ContactForm = () => {
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | error
  const [sent, setSent] = useState(false);

  const toggle = (s) =>
    setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', `New portfolio enquiry from ${form.name}`);
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('services', selected.join(', ') || 'Not specified');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setSelected([]);
        setStatus('idle');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
                  {services.map((s) => (
                    <button key={s} type="button"
                      className={`cf-chip${selected.includes(s) ? ' active' : ''}`}
                      onClick={() => toggle(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {status === 'error' && (
                <p className="cf-error">
                  Something went wrong. Email me directly at edwinchombz@gmail.com
                </p>
              )}

              <button type="submit" className="cf-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Me'}
              </button>
            </form>
          )}
        </div>

        {/* ── Right panel: Lottie ── */}
        <div className="cf-right">
          <div className="cf-lottie-wrap">
            <Lottie
              animationData={availableAnim}
              loop={true}
              autoplay={true}
              className="cf-lottie"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;