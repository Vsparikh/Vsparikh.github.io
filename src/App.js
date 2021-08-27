import homeLogo from "./images/home.svg";
import aboutLogo from "./images/about.svg";
import projectLogo from "./images/project.svg";
import workLogo from "./images/workExp.svg";
import contactLogo from "./images/contactMe.svg";

import { Navbar, NavItem } from "./components/Navbar";
import Banner from "./components/Banner";

const me = {
  name: "Vrajang",
  schoolYear: "third",
  program: "Computer Science",
  university: "University of Waterloo",
};

function App() {
  return (
    <>
      <Navbar>
        <NavItem section="#top" icon={homeLogo} text="Home" />
        <NavItem section="#About" icon={aboutLogo} text="About" />
        <NavItem section="#Work-experiance" icon={workLogo} text="Experience" />
        <NavItem section="#Projects" icon={projectLogo} text="Projects" />
        <NavItem section="#Contact" icon={contactLogo} text="Contact" />
      </Navbar>
      <Banner profile={me} contactLink="#Contact" numCircles={10}></Banner>
    </>
  );
}

export default App;
