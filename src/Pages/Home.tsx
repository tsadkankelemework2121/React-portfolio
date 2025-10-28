import AboutMe from '../Components/Home/Aboutme';
import DesignProjects from '../Components/Home/Design';
import Hero from '../Components/Home/Hero';
// import LanguagesMarquee from './components/LanguagesMarquee';
// import About from './components/About';
// import DesignProjects from './components/DesignProjects';
// import CodeProjects from './components/CodeProjects';
// import Certifications from './components/Certifications';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutMe />
     
      <DesignProjects />
      {/* <CodeProjects />
      <Certifications />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Homepage;
