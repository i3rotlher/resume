import React from "react";
import style from "../../styles/util/SkillRow.module.css";
import Image from "next/image";

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
        <Image src={icon} alt={name} fill />{" "}
      </div>
      <h1 className={`${style.level} ${style.field}`}>{level} </h1>
      <h1 className={style.name}>{name} </h1>
      <h1 className={`${style.progress} ${style.field}`}>
        {progress.done} / {progress.total}
      </h1>
    </div>
  );
};
