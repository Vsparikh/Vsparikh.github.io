import homeLogo from "./images/home.svg";
import aboutLogo from "./images/about.svg";
import projectLogo from "./images/project.svg";
import workLogo from "./images/workExp.svg";
import contactLogo from "./images/contactMe.svg";



import { Navbar, NavItem } from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import WorkExp from "./components/WorkExp";

import { me, languages, BE, DE } from "./data";

function App() {
  return (
    <>
      <Navbar>
        <NavItem section="#top" icon={homeLogo} text="Home" />
        <NavItem section="#About" icon={aboutLogo} text="About" />
        <NavItem section="#Work-experience" icon={workLogo} text="Experience" />
        <NavItem section="#Projects" icon={projectLogo} text="Projects" />
        <NavItem section="#Contact" icon={contactLogo} text="Contact" />
      </Navbar>
      <Banner profile={me} contactLink="#Contact" numCircles={10} />
      <About languages={languages} />
      <WorkExp jobs={[DE, BE]} />
    </>
  );
}

export default App;
