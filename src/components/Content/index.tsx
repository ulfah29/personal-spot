import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
// import FeatureProjects from './FeatureProjects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css';

function Content() {
  return(
    <div className='contentWrapper'>
      <Intro />
      <About />
      <Experience />
      <Skills />
      {/* <FeatureProjects /> */}
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default Content;