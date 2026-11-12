// src/components/About/About.jsx
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
           <p>
              I'm Edwin Chomba, a full-stack developer focused on building
              practical and web applications. My journey in programming
              began with frontend development and gradually into backend
              systems, to understanding how complete applications are
              designed, built, and deployed.
            </p>
            <p>
              I enjoy solving real problems through software, turning ideas into 
              products that are simple to use.
              My work emphasizes clean code,
              maintainability and user experience.
            </p> 
            <p>
              I approach development as a continuous learning. Each
              project strengthens my understanding of systems
              and problem solving, helping me grow into a well-rounded engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;