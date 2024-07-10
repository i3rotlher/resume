import { Devider } from "../../util/Devider";
import { SkillRow } from "../../util/SkillRow";
import skills from "./SkillsData";

type SkillsProps = {
  type: "frontend" | "backend";
};

const SkillLevels: React.FC<SkillsProps> = ({ type }) => {
  return (
    <>
      {type === "frontend" &&
        skills[type].map(
          (skill) =>
            (skill.name !== "Figma" && (
              <SkillRow
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                progress={skill.progress}
                key={skill.name}
              />
            )) || (
              <>
                <Devider />
                <SkillRow
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  progress={skill.progress}
                  key={skill.name}
                />
              </>
            )
        )}
      {type === "backend" &&
        skills[type].map((skill) => (
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
