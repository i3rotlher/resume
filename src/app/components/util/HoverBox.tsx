import React from "react";
import style from "../../styles/util/HoverInfo.module.css";
import globalStyle from "../../../../src/app/page.module.css";

type HoverBoxProps = {
  textRows: string[];
};

export const HoverBox: React.FC<HoverBoxProps> = ({ textRows }) => {
  return (
    <div className={`${style.hoverText} strokedWhiteText`}>
      {textRows.map((row, idx) => (
        <React.Fragment key={idx}>
          <h2>{row}</h2>
          {idx !== textRows.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};
