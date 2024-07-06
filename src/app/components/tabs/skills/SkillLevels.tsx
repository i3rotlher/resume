import { SkillRow } from "../../util/SkillRow";
import skills from "./SkillsData";

type SkillsProps = {
  type: "frontend" | "backend";
};

const SkillLevels: React.FC<SkillsProps> = ({ type }) => {
  return (
    <>
      {skills[type].map((skill) => (
        <SkillRow
          name={skill.name}
          icon={skill.icon}
          level={skill.level}
          progress={skill.progress}
          key={skill.name}
        />
      ))}
    </>
  );
};

export default SkillLevels;
