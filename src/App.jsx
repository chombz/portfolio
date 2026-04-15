// src/App.jsx - FINAL VERSION
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
        <Contact />
      </main>
    </div>
  );
}

export default App;