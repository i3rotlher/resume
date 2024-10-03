import React from "react";
import style from "../../styles/util/SkillRow.module.css";
import Image from "next/image";
import { HoverInfo } from "./HoverInfo";

type SkillRowProps = {
  icon: string;
  name: string;
  level: number;
  progress: { done: number; total: number };
};

export const SkillRow: React.FC<SkillRowProps> = ({
  icon,
  name,
  level,
  progress,
}) => {
  return (
    <div className={style.skillRowContainer}>
      <div className={style.icon}>
        <Image src={icon} alt={name} fill />
      </div>
      <div className={style.levelContainer}>
        <HoverInfo
          hoverText={[
            "Skill Level",
            "",
            `Level ${level} out of 10.`,
            "0 = Never used this skill",
            "10 = Used this skill a lot",
            "and is capable of doing anything with it.",
          ]}
        >
          <h3 className={`${style.level} ${style.field}`}>{level} </h3>
        </HoverInfo>
      </div>

      <h3 className={style.name}>{name} </h3>
      <h3 className={`${style.progress} ${style.field}`}>
        {progress.done} / {progress.total}
      </h3>
    </div>
  );
};
