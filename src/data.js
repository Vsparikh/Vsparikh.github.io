import dElogo from "./images/DE.png";
import bELogo from "./images/BE.png";
import website from "./images/website.svg";
import urLogo from "./images/ur.svg";
import lambda from "./images/lambda.svg";

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

class Project {
  constructor(title, tech, discription, logo, link) {
    this.title = title;
    this.tech = tech;
    this.discription = discription;
    this.logo = logo;
    this.link = link;
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

// title, tech, discription, logo, link
const personalWeb = new Project(
  "Personal Website",
  ["Html", "Sass(css)", "JavaScript", "React"],
  "Designed and developed personal portfolio website to learn basics of Front-end web development and React",
  website,
  "https://github.com/Vsparikh/Vsparikh.github.io"
);

const ur = new Project(
  "Royal Game of Ur (Mobile Board Game)",
  ["Unity", "C#"],
  "Created strategy based game for mobile devices supporting player versus computer gameplay",
  urLogo,
  "https://github.com/Vsparikh/Royal-Game-of-Ur"
);

const lamInt = new Project(
  "Lambda Calculus Interpreter",
  ["Python"],
  "Implemented parser for untyped lambda calculus to strengthen understanding of functional programming and interpreter design",
  lambda,
  "https://github.com/Vsparikh/lambda-calculus-Interpreter"
);

export { me, languages, BE, DE, personalWeb, ur, lamInt };
