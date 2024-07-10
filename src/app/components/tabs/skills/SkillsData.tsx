type SkillData = {
  name: string;
  icon: string;
  level: number;
  progress: { done: number; total: number };
};

type Skills = {
  backend: SkillData[];
  frontend: SkillData[];
};

const skills: Skills = {
  backend: [
    {
      name: "Java",
      icon: "/java.png",
      level: 8,
      progress: { done: 1236, total: 1863 },
    },
    {
      name: "Scala",
      icon: "/scala.png",
      level: 3,
      progress: { done: 113, total: 235 },
    },
    {
      name: "Python",
      icon: "/python.png",
      level: 6,
      progress: { done: 322, total: 546 },
    },
    {
      name: "JavaScript",
      icon: "/js.png",
      level: 9,
      progress: { done: 636, total: 2316 },
    },
  ],
  frontend: [
    {
      name: "Vue",
      icon: "/vue.png",
      level: 3,
      progress: { done: 165, total: 235 },
    },
    {
      name: "Angular",
      icon: "/angular.png",
      level: 7,
      progress: { done: 345, total: 1534 },
    },
    {
      name: "React",
      icon: "/react.png",
      level: 6,
      progress: { done: 423, total: 546 },
    },
    {
      name: "Figma",
      icon: "/figma.png",
      level: 7,
      progress: { done: 1151, total: 1542 },
    },
  ],
};

export default skills;
