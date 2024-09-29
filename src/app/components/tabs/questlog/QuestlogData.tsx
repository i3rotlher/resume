import { QuestCardProps } from "../../util/QuestCard";

export type QuestLogData = QuestCardProps[];

export const Quests: QuestLogData = [
  {
    from: "Mai 2024",
    to: "Present",
    name: "Hands on Projects",
    company: "By Myself",
    city: "Seoul",
    country: "South Korea",
    icon: "ownWork.png",
    active: true,
    keyResponsibilities: [
      "Management and further development of software for automated web application testing",
      "Implementing new features in both the back-end and front-end",
      "Dockerizing the project",
      "Deploying and maintaining the software on the servers",
    ],
    skills:
      "JavaScript, TypeScript, Angular, HTML, MongoDB, CSS, Web-Application, Testing, CI/CD, Docker, Agile-Development, Deployment, Github-Actions".split(
        ", "
      ),
    sidenote: "",
  },
  {
    from: "Mar 2022",
    to: "Apr 2024",
    name: "Full-Stack Developer *",
    company: "adesso SE",
    city: "Stuttgart",
    country: "Germany",
    icon: "adesso.png",
    active: false,
    keyResponsibilities: [
      "Management and further development of software for automated web application testing",
      "Implementing new features in both the back-end and front-end",
      "Dockerizing the project",
      "Deploying and maintaining the software on the servers",
    ],
    skills:
      "JavaScript, TypeScript, Angular, HTML, MongoDB, CSS, Web-Application, Testing, CI/CD, Docker, Agile-Development, Deployment, Github-Actions".split(
        ", "
      ),
    sidenote: "This was a working student position.",
  },
  {
    from: "Sep 2021",
    to: "Feb 2022",
    name: "Internship Semester",
    company: "adesso SE",
    city: "Berlin",
    country: "Germany",
    icon: "adesso.png",
    active: false,
    keyResponsibilities: [
      "Development of a conceptional solution according to design thinking methods",
      "Development and implementation of a mobile web application",
    ],
    skills:
      "Java, CSS, HTML, JavaScript, Angular, Ionic, Design Thinking, Usability Testing, Web Design, Web Application, Responsive Web Design, Scrum, JIRA".split(
        ", "
      ),
    sidenote: "",
  },
  {
    from: "Nov 2020",
    to: "Sep 2021",
    name: "Data Analyst *",
    company: "Siemens Logistics",
    city: "Konstanz",
    country: "Germany",
    icon: "siemens.png",
    active: false,
    keyResponsibilities: [
      "Handling Node-RED, Python, JavaScript, and HTML for data analysis and visualization",
      "Creation of CI scripts for automation",
    ],
    skills: "Python, Excel, Data Analysis, Node-RED, JavaScript, HTML".split(
      ", "
    ),
    sidenote: "This was a working student position.",
  },
];
