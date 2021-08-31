import homeLogo from "./images/home.svg";
import aboutLogo from "./images/about.svg";
import projectLogo from "./images/project.svg";
import workLogo from "./images/workExp.svg";
import contactLogo from "./images/contactMe.svg";

import dElogo from "./images/DE.png";
import bELogo from "./images/BE.png";

import Job from "./Job";
import { Navbar, NavItem } from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import WorkExp from "./components/WorkExp";

const me = {
  name: "Vrajang",
  schoolYear: "third",
  program: "Computer Science",
  university: "University of Waterloo",
};

const languages = [
  "React",
  "Python",
  "C#",
  "C",
  "C++",
  "Scheme",
  "Unreal Engine",
  "Unity",
  "Git",
  "Linux",
  "ARM x86",
  "MIPS assembly",
  "Lua",
  "Javascript",
  "Visual Studio",
  "Perforce",
  "MySQL",
];

const DE = new Job(
  "Game Programmer (Warframe: AI team, Remote)",
  "Digital Extremes Ltd.",
  "https://www.digitalextremes.com/",
  dElogo,
  new Date(2021, 4),
  new Date(2021, 7),
  ["C++", "Lua"],
  [
    "Developed gameplay features for main enemies using C++ and Lua",
    "Worked on improving old enemies and refined npc game mechanics",
    "Fixed bugs related to various game abilities and AI behaviors in Warframe",
  ]
);

const BE = new Job(
  "Game Programmer (Remote)",
  "Behaviour Interactive Inc.",
  "https://www.bhvr.com/",
  bELogo,
  new Date(2020, 8),
  new Date(2020, 11),
  ["Unreal Engine", "C++"],
  [
    "Developed and improved game components (UI, graphics, sound, etc.) and refined game mechanics",
    "Fixed bug related to various game mechanics and UI components",
    "Worked with artists and game designers to identify constraints and solve design problems",
  ]
);

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
