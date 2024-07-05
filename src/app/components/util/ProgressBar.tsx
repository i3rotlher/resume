import React from "react";
import style from "../../styles/util/ProgressBar.module.css";

type ProgressBarProps = {
  percent: number;
  label: String;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, label }) => {
  return (
    <div className={style.progressbarBackground + " hoverInfo"}>
      <div
        className={style.progressbar}
        style={{ width: `${percent * 100}%` }}
      />
      <h2 className={`${style.label} strokedWhiteTextHighContrast`}>{label}</h2>{" "}
    </div>
  );
};

export default ProgressBar;
