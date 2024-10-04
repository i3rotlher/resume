import { Devider } from "../../util/Devider";
import { SkillRow } from "../../util/SkillRow";
import skills from "./SkillsData";
import style from "../../../styles/tabs/SkillLevels.module.css";

type SkillsProps = {
  frontend: boolean;
};

const SkillLevels: React.FC<SkillsProps> = ({ frontend }) => {
  return (
    <div className={style.skillLevelsContainer}>
      {(frontend &&
        skills["frontend"].map(
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
                <div style={{ height: "5vh" }}>
                  <Devider />
                </div>

                <SkillRow
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  progress={skill.progress}
                  key={skill.name}
                />
              </>
            )
        )) ||
        skills["backend"].map((skill) => (
          <SkillRow
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            progress={skill.progress}
            key={skill.name}
          />
        ))}
    </div>
  );
};

export default SkillLevels;
