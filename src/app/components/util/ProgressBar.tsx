import React from "react";
import style from "../../styles/util/ProgressBar.module.css";

type ProgressBarProps = {
  percent: number;
  label: string;
  color: string;
};

/**
 *
 * @param percent float number of how much percent the bar will be filled [0.0 - 1-0]
 * @param label the text that should be displayed in the center of the progressbar
 * @param color the coor with which the bar will be filled
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ percent, label, color }) => {
  return (
    <div className={style.progressbarBackground + " hoverInfo"}>
      <div
        className={style.progressbar}
        style={{ width: `${percent * 100}%`, background: color }}
      />
      <h3 className={`${style.label} strokedWhiteTextHighContrast`}>{label}</h3>{" "}
    </div>
  );
};

export default ProgressBar;
