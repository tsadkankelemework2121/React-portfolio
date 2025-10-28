import AboutMe from '../Components/Home/Aboutme';
// import CertificationSection from '../Components/Home/Certefication';
import DesignProjects from '../Components/Home/Design';
import Hero from '../Components/Home/Hero';


function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutMe />
     
      <DesignProjects />
     
      {/* <CertificationSection />  */}
      {/* <CodeProjects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Homepage;
