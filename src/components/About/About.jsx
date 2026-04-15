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
              practical and reliable web applications. My journey in programming
              began with frontend development and gradually expanded into backend
              systems, allowing me to understand how complete applications are
              designed, built, and deployed.
            </p>
            <p>
              I enjoy solving real problems through software — turning ideas into
              functional products that are simple to use and thoughtfully
              structured behind the scenes. My work emphasizes clean code,
              maintainability, and user experience.
            </p> 
            <p>
              I approach development as a continuous learning process. Each
              project strengthens my understanding of systems, architecture,
              and problem solving, helping me grow into a more capable and
              well-rounded engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;