import dElogo from "./images/DE.png";
import bELogo from "./images/BE.png";

class Job {
  constructor(
    title,
    company,
    companyLink,
    logo,
    startDate,
    endDate,
    tech,
    discription
  ) {
    this.title = title;
    this.company = company;
    this.companyLink = companyLink;
    this.logo = logo;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tech = tech;
    this.discription = discription;
  }
}

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

export { me, languages, BE, DE };
