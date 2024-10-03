export type AttributeData = {
  name: string;
  icon: string;
};

type Attributes = {
  [key: string]: AttributeData[];
};

const attributes: Attributes = {
  frontend: [
    {
      name: "NodeJS",
      icon: "/attributes/nodejs.svg",
    },
    {
      name: "HTML",
      icon: "/attributes/html.svg",
    },
    {
      name: "CSS",
      icon: "/attributes/css.svg",
    },
    {
      name: "TypeScript",
      icon: "/attributes/typescript.svg",
    },
    {
      name: "Bootstrap",
      icon: "/attributes/bootstrap.svg",
    },
    {
      name: "JavaScript",
      icon: "/attributes/javascript.svg",
    },
    {
      name: "Testing",
      icon: "/attributes/testing.svg",
    },
  ],
  backend: [
    {
      name: "MongoDB",
      icon: "/attributes/mongo.svg",
    },
    {
      name: "SQL",
      icon: "/attributes/sql.svg",
    },

    {
      name: "OpenAPI",
      icon: "/attributes/openapi.svg",
    },
    {
      name: "GitHub Actions",
      icon: "/attributes/githubactions.svg",
    },
    {
      name: "GitHub",
      icon: "/attributes/github.svg",
    },
    {
      name: "CI/CD",
      icon: "/attributes/cicd.svg",
    },
    {
      name: "NodeJS",
      icon: "/attributes/nodejs.svg",
    },
    {
      name: "Windows",
      icon: "/attributes/windows.svg",
    },
    {
      name: "MacOS",
      icon: "/attributes/macos.svg",
    },
    {
      name: "Linux",
      icon: "/attributes/linux.svg",
    },
    {
      name: "C/C++",
      icon: "/attributes/cpp.svg",
    },
    {
      name: "Testing",
      icon: "/attributes/testing.svg",
    },
  ],
  general: [
    {
      name: "Scrum",
      icon: "/attributes/scrum.svg",
    },
    {
      name: "Agile Development",
      icon: "/attributes/agiledevelopment.svg",
    },
    {
      name: "Jira",
      icon: "/attributes/jira.svg",
    },
    {
      name: "Observation",
      icon: "/attributes/observation.svg",
    },
    {
      name: "Multi-Tasking",
      icon: "/attributes/multitasking.svg",
    },
    {
      name: "Teamwork",
      icon: "/attributes/teamwork.svg",
    },
    {
      name: "Fast Learning",
      icon: "/attributes/fastlearning.svg",
    },
    {
      name: "Reliability",
      icon: "/attributes/reliability.svg",
    },
    {
      name: "Communication",
      icon: "/attributes/communication.svg",
    },
    {
      name: "Decision Making",
      icon: "/attributes/decisionmaking.svg",
    },
  ],
};

export default attributes;
