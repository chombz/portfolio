// src/components/Hero/Hero.jsx - DEBUG VERSION
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero debug-font">
      <div className="container">
        <div className="hero-grid">
          {/* Left Panel - Text Content */}
          <div className="hero-left debug-left">
            <h3 className="hero-greeting debug-greeting">
              Hi, I'm
            </h3>
            
            <h1 className="hero-name debug-name">
              <span className="name-first debug-name-first">Edwin</span>
              <span className="name-last debug-name-last">Chomba</span>
            </h1>
            
            <h2 className="hero-role debug-role">
              <span className="static-text debug-static">I'm a </span>
              <span className="dynamic-text debug-dynamic">
                <Typewriter
                  words={['Software Engineer', 'Full Stack Developer','Tech Enthusiasts', 'Continuous Learner']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            
            <p className="hero-tagline debug-tagline">
              A Web Developer experience specializing in building scalable web solutions. 
              I focus on delivering software and exceptional user experiences.
            </p>
            
            <div className="hero-buttons debug-buttons">
              <a href="#contact" className="btn btn-primary debug-btn-primary">
                HIRE ME
              </a>
              <a href="#projects" className="btn btn-secondary debug-btn-secondary">
                VIEW WORK
              </a>
            </div>
            
            <div className="scroll-down debug-scroll">
              <span>SCROLL DOWN</span>
              <div className="scroll-arrow">↓</div>
            </div>
          </div>
          
          {/* Right Panel - Vertical Stats */}
          <div className="hero-right debug-right">
            <div className="stats-vertical debug-stats">
              <div className="stat-line debug-stat-line">
                <div className="line-left debug-line-left">
                  <div className="line-icon">━</div>
                </div>
                <div className="line-content debug-line-content">
                  <div className="stat-number debug-stat-number">4</div>
                  <div className="stat-text debug-stat-text">
                    <div className="stat-label debug-stat-label">Years of Experience</div>
                    <div className="stat-subtext debug-stat-subtext">Full Stack Development</div>
                  </div>
                </div>
              </div>
              
              <div className="stat-line debug-stat-line">
                <div className="line-left debug-line-left">
                  <div className="line-icon">━</div>
                </div>
                <div className="line-content debug-line-content">
                  <div className="stat-number">7+</div>
                  <div className="stat-text debug-stat-text">
                  <div className="stat-label debug-stat-label">Applications Built</div>
                  <div className="stat-subtext debug-stat-subtext">From Idea to Deployment</div>
                </div>
                </div>
              </div>
              
              <div className="stat-line debug-stat-line">
                <div className="line-left debug-line-left">
                  <div className="line-icon">━</div>
                </div>
                <div className="line-content debug-line-content">
                  <div className="stat-number">E2E</div>
                  <div className="stat-text debug-stat-text">
                  <div className="stat-label debug-stat-label">Development Process</div>
                  <div className="stat-subtext debug-stat-subtext">
                       Frontend • Backend • Deployment
                  </div>
                </div>
                </div>
              </div>
              
              <div className="stat-line debug-stat-line">
                <div className="line-left debug-line-left">
                  <div className="line-icon">━</div>
                </div>
                <div className="line-content debug-line-content">
                  <div className="stat-number">∞</div>
                  <div className="stat-text">
                    <div className="stat-label">Continuous Learning</div>
                    <div className="stat-subtext">
                        Improving Through Practice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;