import Navbar from './components/Navbar/Navbar';
import About from './components/Section/About';
import Hero from './components/Section/Hero';
import Project from './components/Section/Project';
import Services from './components/Section/Services';
import Skill from './components/Section/Skill';

function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar />
    <section id='home'>
      <Hero/>
    </section>
    <section id='services'>
      <Services/>
    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='skill'>
      <Skill/>
    </section>
    <section id='project'>
      <Project/>
    </section>
    </div>
  );
}

export default App;
