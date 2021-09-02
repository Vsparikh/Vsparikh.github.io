import homeLogo from "./images/home.svg";
import aboutLogo from "./images/about.svg";
import projectLogo from "./images/project.svg";
import workLogo from "./images/workExp.svg";
import contactLogo from "./images/contactMe.svg";

import githubLogo from "./images/github.svg";
import mailLogo from "./images/mail.svg";
import linkdinLogo from "./images/linkdin.svg";

import { Navbar, NavItem } from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Projects from "./components/Projects";
import { Contact, ContactEntry } from "./components/Contact";

import { me, languages, BE, DE, personalWeb, ur, lamInt } from "./data";

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
      <Projects projects={[personalWeb, ur, lamInt]} />
      <Contact>
        <ContactEntry
          icon={mailLogo}
          link="mailto:vrajang@outlook.com"
          text="Email"
        ></ContactEntry>
        <ContactEntry
          icon={linkdinLogo}
          link="https://www.linkedin.com/in/Vsparikh"
          text="Linkedin"
        ></ContactEntry>
        <ContactEntry
          icon={githubLogo}
          link="https://github.com/Vsparikh"
          text="GitHub"
        ></ContactEntry>
      </Contact>
    </>
  );
}

export default App;
