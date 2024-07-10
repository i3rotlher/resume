import SkillLevels from "./SkillLevels";
import style from "../../../styles/tabs/Skills.module.css";

const Skills = () => {
  return (
    <div className={style.layout}>
      <SkillLevels type="frontend" />
    </div>
  );
};

export default Skills;
